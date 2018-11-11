const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use('/static', express.static(path.join(__dirname, 'dist/express-nhjs')))

app.get('/blue', (req,res) => {
  res.send('blue')
})

app.use('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/express-nhjs/index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))