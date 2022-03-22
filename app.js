const express = require('express');
const app = express();
const {engine} = require('express-handlebars');

app.set("views", "./views");

app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
    res.render('home', {gifUrl})
});

app.listen(3000, () => {
    console.log('Gif Search listening on port localhost:3000!');
});