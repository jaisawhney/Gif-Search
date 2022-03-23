const fetch = require('node-fetch');
const express = require('express');
const app = express();
const {engine} = require('express-handlebars');

app.set('views', './views');
app.use(express.static('public'));

app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const term = req.query?.term
    fetch(`https://g.tenor.com/v1/search?q=${term || ""}&key=${process.env.API_KEY}&limit=10`)
        .then(res => res.json())
        .then(data => {
            const gifs = data.results;
            res.render('home', {gifs});
        });
})

app.listen(3000, () => {
    console.log('Gif Search listening on port localhost:3000!');
});