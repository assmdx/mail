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
        try {
            let data = await service.mail.send(ctx.request.body.email,ctx.request.body.text);
            this.success(null);
        } catch (err) {
            log.error("fail to send email", err);
            this.fail("fail to send email", err);
        }
    }
}

module.exports = MailController;