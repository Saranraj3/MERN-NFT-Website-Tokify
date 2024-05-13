const express = require('express');
const cors = require('cors');
const router = require('./Routes');
const { mongoose } = require('mongoose');
const { PORT } = process.env
require('dotenv').config()
const app = express();


// MongoDB Database Connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Database Connected')
        app.listen(process.env.PORT, () => {
            console.log(`Server Working Port Number ${PORT}`)
        })
    })
    .catch((err) => { console.log(err) })

// Middlewares

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));

app.use('/auth', router);