require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);

module.exports = app;