var express = require('express');
var router = express.Router();
var app = express();

app.use(express.static(__dirname + '/build/web'));

app.use("/", router);
app.use(express.urlencoded({
    extended: true
}))

app.listen(8082);
console.log("Listening ... on 8082")
