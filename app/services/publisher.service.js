const { PublisherModel } = require('../models');

class PublisherService {
    constructor() {
        this.publisher = PublisherModel;
    }

    data(payload) {
        const values = {
            'name': payload.name,
            'address': payload.address,
        }
        Object.keys(values).forEach(
            (key) => values[key] === undefined && delete values[key]
        );
        return values;
    }

    async create(payload) {
        const values = this.data(payload);
        const result = await this.publisher.create(values);
        return result;
    }

    async findAll() {
        const result = await this.publisher.find({});
        return result;
    }

    async findOne(id) {
        const result = await this.publisher.findById(id);
        return result;
    }

    async update(id, data) {
        const values = this.data(data);
        const result = await this.publisher.findByIdAndUpdate(id, values);
        return result;
    }

    async delete(id) {
        const result = await this.publisher.findByIdAndDelete(id);
    }
}

module.exports = PublisherService;