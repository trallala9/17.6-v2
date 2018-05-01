var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set('view engine', 'pug');
app.set('views', './views');

app.use('/store', function (req, res, next) {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});
app.use(bodyParser.json());
app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});
app.get('/first-template', function (req, res) {
    res.render('first-template');
});

app.get('/dynamic-view', function (req, res) {
    res.render('dynamic', {
        name: "Moja dynamiczna strona",
        url: "http://www.google.com"
    });
});
app.get('/home', function (reg, res) {
    res.render('home');
});


app.get('/auth/google', function (req, res) {
    res.render('authGoogle');
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
app.listen(3000);
