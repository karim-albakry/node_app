const express = require('express');

const greetings = require('./greetings')

const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8000;

app.get('/', (req, res) => {

    res.send(greetings.say_bonjour('Karim'))
  })

app.listen(port, function () {
  console.log('Example app listening on port 8000!')
})