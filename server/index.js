const express = require('express');
const mongoose = require('mongoose');
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