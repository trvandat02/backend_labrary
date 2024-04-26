const { UserModel } = require('../models');
const bcrypt = require('bcrypt');
require('dotenv').config();

class UserService {
    constructor() {
        this.user = UserModel;
    }

    data(payload) {
        const values = {
            'name': payload.name,
            'email': payload.email,
            'password': payload.password,
            'permission': payload.permission,
            'img': payload.img,
            'address': payload.address,
        }
        Object.keys(values).forEach(
            (key) => values[key] === undefined && delete values[key]
        );
        return values;
    }

    async findAll() {
        const result = await this.user.find({});
        return result;
    }

    async findOne(email) {
        const result = await this.user.findOne({email: email});
        return result;
    }

    async findById(id) {
        const result = await this.user.findById(id);
        return result;
    }

    async create(payload) {
        const values = this.data(payload);
        const salt = parseInt(process.env.SALT);
        const pass = values.password;

        bcrypt.hash(pass, salt, async (err, hash) => {
            if (err) return "Error for hassing password";

            values.password = hash;
            const result = await this.user.findOneAndUpdate({ email: values.email }, values, { upsert: true });
            return result;
        })
    }

    async update(id, data) {
        const values = this.data(data);
        const old = await this.user.findOne({ password: values.password });
        const salt = parseInt(process.env.SALT);
        const pass = values.password;

        if (old) {
            const result = await this.user.findByIdAndUpdate(id, values);
            return result;
        } else {
            bcrypt.hash(pass, salt, async (err, hash) => {
                if (err) return "Error for hashing passord";

                values.password = hash;
                const result = await this.user.findByIdAndUpdate(id, values);
                return result;
            })
        }
    }

    async delete(id) {
        if (id) {
            const result = await this.user.findByIdAndDelete(id);
            return result;
        }
    }

}

module.exports = UserService;