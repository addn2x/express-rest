/**
 * sudo apt install -y mongodb
 * sudo service mongodb start
 * sudo systemctl status mongodb
 */


 const mongoose = require('mongoose');

 const connect = mongoose.connect('mongodb://localhost/items')
    .then(() => {
        console.log('Successfully connected to localhost:27017');
    })
    .catch((error) => {
        console.log(`An error has occurred ${error}`);
    });

const ItemSchema = new mongoose.Schema({
    privateId: Number,
    label: String,
    date: { type: Date, default: Date.now },
    isActive: Boolean
});

const Item = mongoose.model('Item',ItemSchema);

async function createItem() {

    const object = new Item({
        privateId: 1,
        label: 'First',
        isActive: true
    });
    const itemResult = await object.save();
    console.log(itemResult);
}

createItem();