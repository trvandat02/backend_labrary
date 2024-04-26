const AdminService = require('../services/admin.service');
const ApiErrror = require('../api-error');
require('dotenv').config();

exports.findAll = async (req, res, next) => {
    try {
        const adminService = new AdminService();
        const document = await adminService.findAll();
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}

exports.findOne = async (req, res, next) => {
    try {
        const adminService = new AdminService();
        const document = await adminService.findOne(req.params.email);
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}

exports.findById = async (req, res, next) => {
    try {
        const adminService = new AdminService();
        const document = await adminService.findById(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}

exports.create = async (req, res, next) => {
    try {
        const adminService = new AdminService();
        const document = await adminService.create(req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}

exports.update = async (req, res, next) => {
    try {
        const adminService = new AdminService();
        const document = await adminService.update(req.params.id, req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}

exports.addFavorite = async (req, res, next) => {
    try {
        const adminService = new AdminService();
        const document = await adminService.addFavorite(req.params.id, res.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}

exports.delete = async (req, res, next) => {
    try {
        const adminService = new AdminService();
        const document = await adminService.delete(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiErrror(500, err));
    }
}