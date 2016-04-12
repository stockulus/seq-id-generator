'use strict'

const fs = require('fs')

/**
 * Factory function for the generator
 * @param {string} path
 * @param {function} [formatFunc] - optional id formating
 */
module.exports = function seqIdGenerator (path, formatFunc) {
  const generator = (id) => {
    return {
      next () {
        return new Promise((resolve, reject) => {
          id++
          fs.writeFile(path, id, (error) => {
            if (error) return reject(error)
            resolve(formatFunc ? formatFunc(id) : id)
          })
        })
      }
    }
  }

  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      const lastId = error ? 0 : parseInt(data, 10)
      resolve(generator(lastId))
    })
  })
}
