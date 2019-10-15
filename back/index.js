const express = require('express')
const app = express()

app.get('/', (req, res) => res.status(200).send('hambrientoapp'))

app.listen(3000, () => console.log('hambrientoapp running...'))