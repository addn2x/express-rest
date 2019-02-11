const express = require('express');
const item = require('./test-routes');

const app = express();
app.use(express.json());
app.use('/api/items', item);

const port = process.env.port || 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
