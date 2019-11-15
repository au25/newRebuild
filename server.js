const { createServer } = require("http");
const express = require("express");
let path = require("path");
const routes = require("./routes/routes");
const bodyParser = require('body-parser');
const Promise = require("promise");

const app = express();

const PORT = process.env.PORT || 3001;

// app.use(helmet());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.disable("x-powered-by");

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

//serve static build - automate
app.use(express.static(path.resolve(__dirname, "build")));
// app.get("/home", (req, res, next) => {
//   res.sendFile(path.resolve(__dirname, "build", "index.html"));
// });
app.use("/*", routes);

const server = createServer(app);

server.listen(PORT, err => {
  if (err) throw err;
  console.log("Server started...");
});
