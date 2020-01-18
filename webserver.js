const express = require('express');
const expressBodyParser = require('body-parser');
const app = express();
var cors = require('cors')

app.use(cors());
app.use(expressBodyParser.json());  // support parsing of application/json type post data
app.use(expressBodyParser.urlencoded({ extended: true }));  //support parsing of application/x-www-form-urlencoded post data

const conf = require('./globalConfigFactory');

const _ = require('lodash');

// Define Express server settings to use for the web service...
var server = app.listen(conf.node_port, function () {
    console.log('Configuration Environment Id: ' + conf.config_id);
    console.log("Server details: " + server.address().port);

    var host = server.address().address.length >= 3 ? server.address().address : 'localhost'
    var port = server.address().port
    
    console.log("App listening at http://" + host + ":" + port)
});

module.exports = app;