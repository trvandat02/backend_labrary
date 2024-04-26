const BookService = require('../services/book.service');
const ApiError = require('../api-error');

exports.findAll = async (req, res, next) => {
    try {
        const bookService = new BookService();
        const document = await bookService.findAll();
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.findOne = async (req, res, next) => {
    try {
        const bookService = new BookService();
        const document = await bookService.findOne(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.create = async (req, res, next) => {
    try {
        const bookService = new BookService();
        const document = await bookService.create(req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.update = async (req, res, next) => {
    try {
        const bookService = new BookService();
        const document = await bookService.update(req.params.id, req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.delete = async (req, res, next) => {
    try {
        const bookService = new BookService();
        const document = await bookService.delete(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}