const express = require('express');
const users = require('../controllers/user.controller');

const router = express.Router();

router.route('/')
    .get(users.findAll)
    .post(users.create)

router.route('/:id')
    .get(users.findById)
    .post(users.update)
    .delete(users.delete)

router.route('/email/:email')
    .get(users.findOne)

module.exports = router;