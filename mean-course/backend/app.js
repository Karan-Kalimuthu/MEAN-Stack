const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();
mongoose.connect("mongodb+srv://apple:apple@cluster0.xl6iy.mongodb.net/MEAN?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log('Connection Failed', err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-with,Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
  next();
})

app.post("/api/posts", (req, res, next) => {
  const post = new Post({ title: req.body.title, content: req.body.content });
  console.log(post);
  res.status(201).json({
    message: 'Posts added successfully'
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    { id: 'fsjkbfjksbf', title: 'First Server Post', content: 'This is coming from the server' },
    { id: 'dkfndsngkjs', title: 'Second Server Post', content: 'This is coming from the server!' },
    { id: 'dklnkndfkgn', title: 'Third Server Post', content: 'This is coming from the server!!' },
  ]
  res.status(200).json({ message: 'Posts fetched successfully!', posts: posts });
});

module.exports = app;
