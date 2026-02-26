const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

const students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 21 }
];

// Serve static files
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('imges', (req, res) => {
  res.send('<img src="https://www.shutterstock.com/image-vector/set-sign-forms-colorful-gradient-600nw-2082628327.jpg" alt="Placeholder Image" />');
});

app.get('/api/data', (req, res) => {
    res.send({ message: 'This is some data from the server' });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
