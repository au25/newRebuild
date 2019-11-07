const { createServer } = require("http");
const express = require("express");
let path = require("path");

const app = express();

const PORT = process.env.PORT || 4444;

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   })

app.disable("x-powered-by");

//serve static build - automate 
app.use(express.static(path.resolve(__dirname, 'build')));


app.get("/", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'build', "index.html"));
});

const server = createServer(app);

server.listen(PORT, err => {
  if (err) throw err;
  console.log("Server started...");
});
