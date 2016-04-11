# seq id generator

generates an sequence id, bases on a file

```js
const seqIdGenerator = require('seq-id-generator');

seqIdGenerator(path)
  .then((generator) => generator.next())
  .then((id) => console.log(id))
```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
