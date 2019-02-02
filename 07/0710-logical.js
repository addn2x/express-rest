/**
 * sudo apt install -y mongodb
 * sudo service mongodb start
 * sudo systemctl status mongodb
 */

const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost/items')
    .then(() => {
        console.log('Successfully connected to database');
    })
    .catch((error) => {
        console.log(`An error has occurred: ${error}`);
    });

const ItemSchema = new mongoose.Schema({
    private_id: Number,
    label: String,
    isActive: Boolean,
    date: { type: Date, default: Date.now }
});

const Item = mongoose.model('items', ItemSchema);

async function createItem() {

    const object = new Item({
        private_id: 7,
        label: 'Seventh',
        isActive: true
    });

    const result = await object.save();
    console.log(result);
    console.log();
}

createItem();

async function getItems() {
    const items = await Item
        .find({ isActive: true })
        .count();
    console.log(items);
}

getItems();