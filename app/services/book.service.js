const { BookModel } = require('../models');

class BookService {
    constructor() {
        this.book = BookModel;
    }

    data(payload) {
        const values = {
            'title': payload.title,
            'img': payload.img,
            'category': payload.category,
            'author': payload.author,
            'pid': payload.pid,
            'publisher': payload.publisher,
            'stored': payload.stored,
        }
        Object.keys(values).forEach(
            (key) => values[key] === undefined && delete values[key]
        );
        return values;
    }

    async create(payload) {
        const values = this.data(payload);
        const result = await this.book.create(values);
        return result;
    }

    async findAll() {
        const result = await this.book.find({});
        return result;
    }

    async findOne(id) {
        const result = await this.book.findById(id);
        return result;
    }

    async update(id, data) {
        const values = this.data(data);
        const result = await this.book.findByIdAndUpdate(id, values);
        return result;
    }

    async delete(id) {
        const result = await this.book.findByIdAndDelete(id);
    }
}

module.exports = BookService;