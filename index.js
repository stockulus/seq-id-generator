'use strict'

const fs = require('fs')

module.exports = function (path) {
  const factory = (id) => {
    return {
      next () {
        return new Promise((fulfill, reject) => {
          id++
          fs.writeFile(path, id, (error) => {
            if (error) return reject(error)
            fulfill(id)
          })
        })
      }
    }
  }

  return new Promise((fulfill, reject) => {
    fs.readFile(path, (error, data) => {
      const lastId = error ? 0 : parseInt(data, 10)
      fulfill(factory(lastId))
    })
  })
}
