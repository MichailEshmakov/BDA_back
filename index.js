const express = require('express')
const mongoose = require('mongoose')
const scoreLineRoutes = require('./routes//scoreLines')

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(scoreLineRoutes)

mongoose.connect(
  'mongodb+srv://testuser:iL8RYAxCbsbfiiS3@cluster0.tlxtq.mongodb.net/bda-db',// TODO: Вынести строку соединения и порт в конфиг
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }).then(() => app.listen(PORT, () => console.log(`Server has been started on ${PORT}...`)))
  .catch(err => {throw err});
