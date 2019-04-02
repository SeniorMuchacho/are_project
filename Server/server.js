const express = require('express');
const fs = require('fs');
const mongoose = require("mongoose");
const mongo = require('mongodb');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8080

const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db, {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

var urlencodedParser = bodyParser.urlencoded({
  extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
const routes = require(__dirname + '/controlleur/userController')

app.use('/user', routes);
const api = require(__dirname + '/controlleur/api')
app.use('/api', api);

app.get('/about.json', (req, res) => {
  var about = JSON.parse(fs.readFileSync('about.json', 'utf-8'));
  about.server.current_time = Math.round((new Date()).getTime() / 1000);
  var ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);
  if (ip == "::1")
    ip = "127.0.0.1";
  about.client.host = ip;
  res.send(about);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});