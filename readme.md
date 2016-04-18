# seq id generator

generates an sequence id, based on a file

## install
npm i seq-id-generator

## test
npm test

## Contact
Feedback welcome:
Twitter: @stockulus

```js
const seqIdGenerator = require('seq-id-generator')

seqIdGenerator(path)
  .then((generator) => generator.next())
  .then((id) => console.log(id))

// with formating Function
seqIdGenerator(path, (id) => `A-${id}`)
  .then((generator) => generator.next())
  .then((id) => console.log(id))

// or callback style
seqIdGenerator(path, null, (error, generator) => {
  generator.next((error, id) => {
    console.log(id)
  }
})
```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
