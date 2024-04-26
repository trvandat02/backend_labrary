const PublisherService = require('../services/publisher.service');
const ApiError = require('../api-error');

exports.findAll = async (req, res, next) => {
    try {
        const publisherService = new PublisherService();
        const document = await publisherService.findAll();
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.findOne = async (req, res, next) => {
    try {
        const publisherService = new PublisherService();
        const document = await publisherService.findOne(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.create = async (req, res, next) => {
    try {
        const publisherService = new PublisherService();
        const document = await publisherService.create(req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.update = async (req, res, next) => {
    try {
        const publisherService = new PublisherService();
        const document = await publisherService.update(req.params.id, req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.delete = async (req, res, next) => {
    try {
        const publisherService = new PublisherService();
        const document = await publisherService.delete(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}