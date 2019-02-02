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
        console.log();
        console.log(`An error has occures ${error}`);
    });

const ItemSchema = new mongoose.Schema({
    private_id: Number,
    label: String,
    isActive: Boolean,
    date: { type: Date, default: Date.now }
});

const Item = mongoose.model('items', ItemSchema);

async function createItem() {

    const item = new Item({
        private_id: 6,
        label: 'Sixth',
        isActive: false
    });

    const result = await item.save();
    console.log(result);
    console.log();
}

createItem();

async function getItems() {
    const result = await Item
        .find({ private_id: { $gte: 2, $lte: 5 } });
    console.log(result);
    console.log();
}

getItems();