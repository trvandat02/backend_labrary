const UserService = require('../services/user.service');
const ApiErrror = require('../api-error');
require('dotenv').config();

exports.findAll = async (req, res, next) => {
    try {
        const userService = new UserService();
        const document = await userService.findAll();
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}

exports.findOne = async (req, res, next) => {
    try {
        const userService = new UserService();
        const document = await userService.findOne(req.params.email);
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}

exports.findById = async (req, res, next) => {
    try {
        const userService = new UserService();
        const document = await userService.findById(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}

exports.create = async (req, res, next) => {
    try {
        const userService = new UserService();
        const document = await userService.create(req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}

exports.update = async (req, res, next) => {
    try {
        const userService = new UserService();
        const document = await userService.update(req.params.id, req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}

exports.addFavorite = async (req, res, next) => {
    try {
        const userService = new UserService();
        const document = await userService.addFavorite(req.params.id, res.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}

exports.delete = async (req, res, next) => {
    try {
        const userService = new UserService();
        const document = await userService.delete(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}