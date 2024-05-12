const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Routes');
require('dotenv').config()
const { MONGODB_URL, PORT } = process.env
const app = express();


// MongoDB Database Connection

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => { console.log('Database Connected') })
    .catch((err) => { console.log(err) })

app.listen(PORT, () => {
    console.log(`Server Working Port Number ${PORT}`)
})

// Middlewares

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));
app.use('/auth', router);