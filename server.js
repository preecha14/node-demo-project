const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const app = express()

//app.get('/', (req, res) => {
//  res.send('Hello World')
//})

app.use(express.json());
app.use('/', router);
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})