const express = require('express');
const joi = require('joi');

const router = express.Router();

const items = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' },
]

function validateItem(item) {
    const schema = {
        label: joi.string().min(3).required()
    };
    return joi.validate(item, schema);
}
