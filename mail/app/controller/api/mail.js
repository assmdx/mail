'use strict';
const Controller = require('../core/base_controller');

class MailController extends Controller {

    async addSetting() {
        const {
            ctx,
            service
        } = this;
        const log = ctx.logger;
        try {
            let data = await service.mail.add(ctx.request.body)
            this.success(data)
        } catch (err) {
            log.error("fail to change mail settings", err)
            this.fail("fail to change mail settings", err)
        }
    }

    async sendMail() {
        const {
            ctx,
            service
        } = this;
        const log = ctx.logger;
        try{
            let res = await service.mail.sendMail(ctx.request.body.email,ctx.request.body.text)
                .then(data=>{
                    return data;
                })
                .catch(err=>{
                    throw err;
                });
            this.success(res);
        }
        catch (e) {
            log.error("fail to send email", err);
            this.fail('failed to send message,please check your mail server config',e);
        }
    }
}

module.exports = MailController;