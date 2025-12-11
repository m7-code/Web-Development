


//npm i <pakage name> 
// nmp i express => express download karne ka leye

/*  cd "D:\Web development\86"
    npx nodemon server.js              */


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/kia hal han', (req, res) => {
  res.send('Hello World!')
})

app.get('/blog/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
