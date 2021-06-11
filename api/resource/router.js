const express = require('express');
const Resources = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Resources.getAll()
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
   const createResource = req.body
    Resources.insert(createResource)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(next)
})

module.exports = router;