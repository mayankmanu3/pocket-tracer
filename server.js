//import statements
const express = require("express");

//initialize expess in variable named app
const app = express();

//test api
app.get("/", (req, res) => res.json("api running👍"));

//look for environment variable named PORT (specially using for production build)
const PORT = process.env.PORT || 5000;

//starting a server
app.listen(PORT, () =>
  console.log(`Server is up and running at port ${PORT}🚀`)
);
