const BorrowedBookService = require('../services/borrowedbook.service');
const ApiError = require('../api-error');

exports.findAll = async (req, res, next) => {
    try {
        const borrowedBookService = new BorrowedBookService();
        const document = await borrowedBookService.findAll();
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.findOne = async (req, res, next) => {
    try {
        const borrowedBookService = new BorrowedBookService();
        const document = await borrowedBookService.findOne(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.findManyByUid = async (req, res, next) => {
    try {
        const borrowedBookService = new BorrowedBookService();
        const document = await borrowedBookService.findManyByUid(req.params.uid);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.findManyByBid = async (req, res, next) => {
    try {
        const borrowedBookService = new BorrowedBookService();
        const document = await borrowedBookService.findManyByBid(req.params.bid);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.create = async (req, res, next) => {
    try {
        const borrowedBookService = new BorrowedBookService();
        const document = await borrowedBookService.create(req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.update = async (req, res, next) => {
    try {
        const borrowedBookService = new BorrowedBookService();
        const document = await borrowedBookService.update(req.params.id, req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.delete = async (req, res, next) => {
    try {
        const borrowedBookService = new BorrowedBookService();
        const document = await borrowedBookService.delete(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}