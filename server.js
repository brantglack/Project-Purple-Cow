const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')))
app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.send('index.html')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})