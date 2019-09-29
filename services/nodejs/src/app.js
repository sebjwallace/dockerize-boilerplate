const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  axios.get('http://python-service:5000')
    .then(({ data }) => res.json({
      dataFromPythonService: data
    }));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});