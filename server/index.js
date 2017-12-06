const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const books = [];
let id = 0;

app.post('/api/books', (req,res) => {
    console.log('You sent me this data', req.body);
    books.push({
        id: id,
        title: req.body.title,
        author: req.body.author
    })
    id++;
    console.log('books', books);
    res.json(books)
});

app.delete('/api/books/:id', (req, res) => {
    const bookId = req.params.id;
    books.splice(bookIndex, 1);
    res.json(books);
})



app.listen(3000, () => {
    console.log('Listening...now on port ' + 3000);
});