const express = require('express');
const items = require('./routes/items');

const app = express();

app.use(express.json());
app.use('/api/items', items);

const port = process.env.port || 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});