const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(morgan(process.env.morganmode));

mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.port))
    .catch((err) => console.log(err));

app.get('/', (req,res) => {
    res.send('a new node project');
})