const { BorrowdBookModel } = require('../models');

class BorrowedBookService {
    constructor() {
        this.book = BorrowdBookModel;
    }

    data(payload) {
        const values = {
            'uid': payload.uid,
            'name':payload.name,
            'bid': payload.bid,
            'title': payload.title,
            'img': payload.img,
            'quantity': payload.quantity,
            'borrowDate': payload.borrowDate,
            'returnDate': payload.returnDate,
            'returned': payload.returned,
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

    async findManyByUid(uid) {
        const result = await this.book.find({uid: uid});
        return result;
    }

    async findManyByBid(bid) {
        const result = await this.book.find({bid: bid});
        return result;
    }

    async findOne(id) {
        const result = await this.book.findById(id);
        return result;
    }

    async update(id, data) {
        const values = this.data(data);
        const result = await this.book.findByIdAndUpdate(id, values);
        console.log(id);
        return result;
    }

    async delete(id) {
        const result = await this.book.findByIdAndDelete(id);
    }
}

module.exports = BorrowedBookService;