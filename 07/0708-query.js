/**
 * sudo apt install -y mongodb
 * sudo service mongodb start
 * sudo systemctl status mongodb
 */

const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb://localhost/items')
    .then(() => { console.log('Successfully connected to database'); })
    .catch((error) => {
        console.log(`An error has occurred ${error}`);
    });

const ItemSchema = new mongoose.Schema({
    private_id: Number,
    label: String,
    isActive: Boolean,
    date: { type: Date, default: Date.now }
});

const Item = mongoose.model('items', ItemSchema);

async function create() {
    const object = new Item({
        private_id: 5,
        label: 'Fifth',
        isActive: false
    });

    const result = await object.save();
    console.log(result);
    console.log();
}
create();

async function getAllItems() {
    const items = await Item.find();
    console.log(items);
    console.log();
}
getAllItems();

async function getItemsFilter() {
    const items = await Item
        .find({ label: 'First', private_id: 2})
        .limit(10)
        .sort({ label: 1})
        .select({ label: 1, date: 1});
    console.log(items);
    console.log();
}
getItemsFilter();

