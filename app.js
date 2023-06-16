const express = require('express');
const app = express();
const router = express.Router();

// Start the server on any available port
const server = app.listen(8080, () => {
  console.log(`Server is running on port ${server.address().port}`);
});

// Define a basic route
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

// Sample data (can be stored in a database)
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' }
];

// GET /api/books - Get all books
app.get('/api/books', (req, res) => {
  res.send(books);
});

// POST /api/books - Create a new book
app.post('/api/books', (req, res) => {
  const { title, author } = req.body;

  // Generate a unique ID for the new book
  const newBookId = books.length > 0 ? books[books.length - 1].id + 1 : 1;

  const newBook = {
    id: newBookId,
    title,
    author
  };

  books.push(newBook);
  res.status(201).send(newBook);
});


// Export the router
module.exports = router;
