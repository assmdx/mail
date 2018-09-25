'use strict';
const Controller = require('../core/base_controller');

class MailController extends Controller {

    async addSetting() {
        const {
            ctx,
            service
        } = this;
        try {
            let data = await service.mail.add(ctx.request.body)
            this.success(data)
        } catch (err) {
            this.fail("fail to get collect list", err)
        }
    }

    async sendMail() {
        const {
            ctx,
            service
        } = this;
        try {
            let data = await service.mail.send(ctx.request.body.email,ctx.request.body.text)
            this.success(data)
        } catch (err) {
            this.fail("fail to get collect list", err)
        }
    }
}

module.exports = MailController;