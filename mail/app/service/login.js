const Service = require('egg').Service;

class LoginService extends Service {

    async login(username,password) {
        const {
            ctx,
            service,
            app
        } = this;
        return app.config.user.username === username && app.config.user.password === password;
    }
    async changePassword(user,password) {
        const {
            ctx,
            service,
            app
        } = this;
        this.app.config.user.passsword = password;
    }
}

module.exports = LoginService;