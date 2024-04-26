const express = require('express');
const log = require('../controllers/login.controller');

const Router = express.Router();

Router.route('/user/login')
    .post(log.login)

Router.route('/user/token')
    .get(log.UVerifyUSer)

Router.route('/user/logout')
    .get(log.Ulogout)

Router.route('/admin/login')
    .post(log.adLogin)

Router.route('/admin/token')
    .get(log.AdVerifyUSer)

Router.route('/admin/logout')
    .get(log.Adlogout)

module.exports = Router;