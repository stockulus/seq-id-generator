seq-id-generator
====
generates an sequence id (1, 2, 3, 4...), based on a file

### Usage

```bash
npm i seq-id-generator
```

```js
const path = '/tmp/file.txt'
const seqIdGenerator = require('seq-id-generator')

seqIdGenerator(path)
  .then((generator) => generator.next())
  .then((id) => console.log(id))
  .catch((error) => console.error(error))

// with formating Function
seqIdGenerator(path, (id) => `A-${id}`)
  .then((generator) => generator.next())
  .then((id) => console.log(id))
  .catch((error) => console.error(error))

// or callback style
seqIdGenerator(path, null, (error, generator) => {
  if (error) return console.error(error)
  generator.next((error, id) => {
    if (error) return console.error(error)
    console.log(id)
  })
})

```

---
Feedback welcome:
Twitter: [@stockulus](https://twitter.com/stockulus)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
