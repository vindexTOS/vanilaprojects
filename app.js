const app = require('express')()
const fs = require('fs')

app.get('/', (req, res) => {
  fs.readFile('./views/index.html', (err, data) => {
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(data)
  })
})

app.get('/tabata', (req, res) => {
  fs.readFile('./views/Tabata.html', (err, data) => {
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(data)
  })
})

app.listen(5000, () => {
  console.log('server on port 5000...')
})
