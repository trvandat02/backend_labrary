const { UserModel, AdminModel } = require('../models');


class LoginService {
    constructor() {
        this.user = UserModel;
        this.admin = AdminModel;
    }

    async login(email) {
        const result = await this.user.findOne({ email: email })
        return result;
    }

    async adLogin(email) {
        const result = await this.admin.findOne({ email: email })
        return result;
    }

}

module.exports = LoginService;