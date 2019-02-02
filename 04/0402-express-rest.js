const express = require('express');
const joi = require('joi');

const app = express();
app.use(express.json());

const port = process.env.port || 8000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

const items = [
    {id: 1, label: 'First'},
    {id: 2, label: 'Second'},
    {id: 3, label: 'Third'},
    {id: 4, label: 'Fourth'}
];

function validateItem(item) {
    const schema = {
        label: joi.string().min(3).required()
    };
    return joi.validate(item, schema);
}

const strAPI = '/api/';
const strGetAll = `${strAPI}get-all`;
const strGetId = `${strAPI}:id`;
const strPostId = `${strAPI}`;
const strPutId = strGetId;
const strDeleteId = strGetId;

app.get(strGetAll, (req, res) => {
    res.send(items);
});

app.get(strGetId, (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).send(`Item with ${req.params.id} is not found.`);
    }
    res.send(item);
});

app.post(strPostId, (req, res) => {
    const check = validateItem(req.body);
    if (check.error) {
        return res.status(404).send(check.error.details[0].message);
    }
    const item = {
        id: items.length + 1,
        label: req.body.label
    };
    items.push(item);
    res.status(200).send(items);
});

app.put(strPutId, (req, res) => {
    let item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).send(`Item with ${req.params.id} is not found.`);
    }
    const check = validateItem(req.body);
    if (check.error) {
        return res.status(404).send(check.error.details[0].message);
    }
    item.label = req.body.label;
    res.send(items);
});

app.delete(strDeleteId, (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).send(`Item with ${req.params.id} is not found.`);
    }
    const index = items.indexOf(item);
    items.splice(index, 1);
    res.send(items);
});