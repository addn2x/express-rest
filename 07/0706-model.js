/**
 * sudo apt install -y mongodb
 * sudo service mongodb start
 * sudo systemctl status mongodb
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/items')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((error) => console.log('Could not connect to DB', error));

const itemSchema = new mongoose.Schema({
    privateId: Number,
    label: String,
    date: { type: Date, default: Date.now },
    isActive: Boolean
});

// Write the model in Mongo DB
const Item = mongoose.model('Item', itemSchema);

async function createItem() {
    // Write values into the model
    const item = new Item({
        privateId: 1,
        label: 'First',
        isActive: true
    });
    const itemResult = await item.save();
    console.log(itemResult);
}

createItem();