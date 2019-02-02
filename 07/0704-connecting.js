/**
 * sudo apt install -y mongodb
 * sudo service mongodb start
 * sudo systemctl status mongodb
 */


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/items')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((error) => console.log('Could not connect to DB', error));

// Create schema
// Schema is specifically for mongoose
/* 
    String
    Number
    Date
    Buffer
    Boolean
    ObjectID
    Array
*/

const itemSchema = new mongoose.Schema({
    privateId: Number,
    label: String,
    date: { type: DataCue, default: Date.now },
    isActive: Boolean
});
