const path = '/tmp/seq-id-generator-test.txt'

const test = require('tape')
const fs = require('fs')

const seqIdGenerator = require('../index')

test('with no file', (assert) => {
  if (fs.existsSync(path)) fs.unlinkSync(path)

  seqIdGenerator(path)
    .then((generator) => generator.next())
    .then((id) => {
      assert.equal(id, 1)
      assert.end()
    })
    .catch((error) => assert.error(error))
})

test('with file', (assert) => {
  seqIdGenerator(path)
    .then((generator) => generator.next())
    .then((id) => {
      assert.equal(id, 2)
      assert.end()
    })
    .catch((error) => assert.error(error))
})
