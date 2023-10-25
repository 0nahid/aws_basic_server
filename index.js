const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World from aws & port removed by nginx!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))