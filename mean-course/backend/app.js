const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'fsjkbfjksbf', title: 'First Server Post', content: 'This is coming from the server' },
    { id: 'dkfndsngkjs', title: 'Second Server Post', content: 'This is coming from the server!' },
    { id: 'dklnkndfkgn', title: 'Third Server Post', content: 'This is coming from the server!!' },
  ]
  res.status(200).json({ message: 'Posts fetched successfully!', posts: posts });
});

module.exports = app;
