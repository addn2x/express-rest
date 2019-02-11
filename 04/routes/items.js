const express = require('express');
const joi = require('joi');

const router = express.Router();

const items = [
    { id: 1, label: 'First' },
    { id: 2, label: 'Second' },
    { id: 3, label: 'Third' },
    { id: 4, label: 'Fourth' }
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

router.get('/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {'/:id', (req, res) => {
    
    }
        return res.send(`Item not found`);
    }
    res.send(item);'/:id', (req, res) => {
    
    }
});

router.post('/', (req, res) => {
    const check = validateItem(req.body);
    if (check.error) {
        return res.send(`Error: ${check.error}`);
    }
    const item = {
        id: items.length + 1,
        label: req.body.label
    };
    items.push(item);
    res.send(items);
});

router.put('/:id', (req, res) => {
    const check = validateItem(req.body);
    if (check.error) {
        return res.send(`Error: ${check.error}`);
    }
    let item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.send(`Item not found`);
    }
    item.label = req.body.label;
    res.send(items);
});

router.delete('/:id', (res, req) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.send(`Item not found`);
    }
    const index = items.indexOf(item);
    items.splice(index, 1);
    res.send(items);
});

module.exports = router;