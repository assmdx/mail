'use strict';
const Joi = require('joi');
const Controller = require('../core/base_controller');

class LoginController extends Controller {

    async login() {
        const {
            service
        } = this;
        const log = ctx.logger;
        try {
            //validate request data
            const schema = Joi.object().keys({
                username: Joi.string().required(),
                password: Joi.string().required(),
            })
            const result = Joi.validate(ctx.request.body, schema);
            if(result.error){
                log.warn(result.error);
                this.fail("fail to login,please check parameters");
                return;
            }

            console.log('test')
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
            //validate request data
            const schema = Joi.object().keys({
                username: Joi.string().required(),
                password: Joi.string().required(),
                newPassword:Joi.string().required()
            })
            const result = Joi.validate(ctx.request.body, schema);
            if(result.error){
                log.warn(result.error);
                this.fail("fail to change password,please check parameters");
                return;
            }

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