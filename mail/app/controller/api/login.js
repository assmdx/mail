'use strict';
const Controller = require('../core/base_controller');

class LoginController extends Controller {

    async login() {
        const {
            ctx,
            service
        } = this;
        const log = ctx.logger;
        try {
            const {username,password} = ctx.request.body;
            let res = service.login.login(username,password);
            if(!res){
                ctx.throw(403);
            }
            ctx.session = ctx.request.body;
            ctx.rotateCsrfSecret();
            this.success(null)
        } catch (err) {
            log.warn('login failed',err);
            this.fail("fail to login");
        }
    }

    async changePassword() {
        const {
            ctx,
            service
        } = this;
        const log = ctx.logger;
        try {
            const {username,password,newPassword} = ctx.request.body;
            let res = service.login.login(username,password);
            if(!res){
                ctx.throw(403);
            }
            service.login.changePassword(username,newPassword);

            ctx.session = ctx.request.body;
            ctx.rotateCsrfSecret();
            this.success('change password success')
        } catch (err) {
            log.warn("failed to change password",err);
            this.fail("failed");
        }
    }
}

module.exports = LoginController;