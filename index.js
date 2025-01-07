/** @format */

const express = require('express');

const cors = require('cors');
const authRouter = require('./src/routers/authRouter');
const connectDB = require('./src/configs/connectDB');
const errorMiddleware = require('./src/middleware/errorMiddleware');
require('dotenv').config();

const app = express();

app.use(cors());

const PORT = 3001;

app.use(express.json());
app.use(errorMiddleware);

app.use('/auth', authRouter)

connectDB();
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`server starting at http://localhost:${PORT}`);

})

