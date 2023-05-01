const app = require('express')()
const fs = require('fs')

const data = [
  {
    name: 'gio',
    id: '1',
  },
  {
    name: 'go',
    id: '2',
  },
]

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

app.get('/api/v1/:id', (req, res) => {
  const { id } = req.params
  const person = data.find((val) => val.id === id)
  res.json({
    res: true,
    data: person,
  })
})

app.listen(5000, () => {
  console.log('server on port 5000...')
})
