const express = require('express');
const publisher = require('../controllers/publisher.controller');

const router = express.Router();

router.route('/')
    .get(publisher.findAll)
    .post(publisher.create)

router.route('/:id')
    .get(publisher.findOne)
    .post(publisher.update)
    .delete(publisher.delete)

module.exports = router;