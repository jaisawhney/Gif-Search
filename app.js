const express = require('express');
const app = express();
const {engine} = require('express-handlebars');

app.set("views", "./views");

app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    console.log(req.query)
    res.render('home')
})

app.listen(3000, () => {
    console.log('Gif Search listening on port localhost:3000!');
});