'use strict'

const polygoat = require('polygoat')
const fs = require('fs')

/**
 * Factory function for the generator
 * @param {string} path
 * @param {function} [formatFunc] - optional id formating
 * @param {function} [callback]
 * @return {Promise} if uses without callback
 */
module.exports = function seqIdGenerator (path, formatFunc, callback) {
  const generator = (id) => {
    return {
      /**
      @param {function} [callback]
      @return {Promise} if uses without callback
      */
      next (callback) {
        return polygoat((done) => {
          id++
          fs.writeFile(path, id, (error) => {
            if (error) return done(error)
            done(null, formatFunc ? formatFunc(id) : id)
          })
        }, callback)
      }
    }
  }

  return polygoat((done) => {
    fs.readFile(path, (error, data) => {
      const lastId = error ? 0 : parseInt(data, 10)
      done(null, generator(lastId))
    })
  }, callback)
}
