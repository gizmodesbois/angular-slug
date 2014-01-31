var express = require('express');
var app = module.exports = express(); // create our app w/ express

app.configure(function() {
    app.use('/dist', express.static(__dirname + '/dist'));
    app.use('/src', express.static(__dirname + '/src'));
    app.use('/assets', express.static(__dirname + '/assets'));
    app.use(express.static(__dirname + '/example')); // set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); // log every request to the console
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride()); // simulate DELETE and PUT
});

app.get('*', function(req, res) {
    res.render('example/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(3000);