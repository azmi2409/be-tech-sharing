require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
const messageRoutes = require('./routes');

app.use(cors('*'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use('/messages', messageRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);

module.exports = app;