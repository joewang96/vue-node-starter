const express = require('express');
const os = require('os');
const path = require('path');

const app = express();

app.use(express.static('dist'));
// Paths for the API
app.get('/api/getUsername', (req, res) =>
  res.send({ username: os.userInfo().username })
);
// Fall back to returning the main index.html, so react-router renders the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '../dist', 'index.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));
