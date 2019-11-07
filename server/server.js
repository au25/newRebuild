const express = require('express');
const helmet = require('helmet')
const bodyParser = require('body-parser');
let path = require('path');

const app = express();

const PORT = (process.env.PORT || 3001); 

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   })

  app.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  })

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  })