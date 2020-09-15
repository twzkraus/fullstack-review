const express = require('express');
const github = require('../helpers/github.js');
const bodyParser = require('body-parser');
const database = require('../database');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // This route should take the github username provided

  let username = req.body.username;
  // debugger;
  github.getReposByUsername(username)
    .then(allRepos => {
      database.save(allRepos.data);
    });

  // and get the repo information from the github API, then
  // save the repo information in the database
});
app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

