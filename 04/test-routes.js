const express = require('express');
const joi = require('joi');

const router = express.Router();

const items = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' }
];

function validateItem(item) {
    const schema = {
        label: joi.string().min(3).required()
    };
    return joi.validate(item, schema);
}

router.get('/get-all', (req, res) => {
    res.send(items);
});

router.get('/get/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.send('Item not found');
    }
    res.send(item);
});

router.post('/', (req, res) => {
    const check = validateItem(req.body);
    if (check.error) {
        return res.send(`Error: ${check.error}`);
    }
    const item = {
        id: items.length + 1,
        label: req.body.label
    }
    items.push(item);
});

router.put('/:id', (req, res) => {
    const check = validateItem(req.body);
    if (check.error) {
        return res.send(`Error: ${check.error}`);
    }
    let item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.send('Item not found');
    }
    item.label = req.body.label;
    res.send(items);
});

router.delete('/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.send('Nothing to delete');
    }
    const inxes = items.indexOf(item);
    items.splice(index, 1);
});

module.exports = router;