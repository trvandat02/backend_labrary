const express = require('express');
const admin = require('../controllers/admin.controller');

const router = express.Router();

router.route('/')
    .get(admin.findAll)
    .post(admin.create)

router.route('/:id')
    .get(admin.findById)
    .post(admin.update)
    .delete(admin.delete)
    
router.route('/email/:email')
    .get(admin.findOne)

module.exports = router;