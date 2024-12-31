/** @format */

const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3001;

app.get('/auth/hello', (_req, res) => {
    res.send('<h1> HELLO </h1>');
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`server starting at http://localhost:${PORT}`);

})

