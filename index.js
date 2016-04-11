'use strict'

const fs = require('fs')

module.exports = function (path) {
  const factory = (id) => {
    return {
      next () {
        return new Promise((resolve, reject) => {
          id++
          fs.writeFile(path, id, (error) => {
            if (error) return reject(error)
            resolve(id)
          })
        })
      }
    }
  }

  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      const lastId = error ? 0 : parseInt(data, 10)
      resolve(factory(lastId))
    })
  })
}
