const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('alive')
})

app.listen(8080, () => {
console.log('alive')
})
