'use strict';
const Joi = require('joi');
const Controller = require('../core/base_controller');

class MailController extends Controller {

    async addSetting() {
        const {
            ctx,
            service
        } = this;
        const log = ctx.logger;
        try {
            //validate request data
            const schema = Joi.object().keys({
                service: Joi.string().required(),
                host: Joi.string().required(),
                secure:Joi.boolean().required(),
                port:Joi.number().required(),
                user: Joi.string().required(),
                pass: Joi.string().required()
            })
            const result = Joi.validate(ctx.request.body, schema);
            if(result.error){
                log.warn(result.error);
                this.fail("fail to update settings,please check parameters");
                return;
            }

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
            //validate request data
            const schema = Joi.object().keys({
                email: Joi.string().required(),
                text: Joi.string().required(),
                subject:Joi.string().required(),
                html:Joi.string().required()
            })
            const result = Joi.validate(ctx.request.body, schema);
            if(result.error){
                log.warn(result.error);
                this.fail("fail to send email,please check parameters");
                return;
            }

            service.mail.sendMail(ctx.request.body.email,ctx.request.body.text,ctx.request.body.subject,ctx.request.body.html)
            this.success(null);
        }
        catch (err) {
            log.error("fail to send email", err);
            this.fail('failed to send message,please check your mail server config',err);
        }
    }
}

module.exports = MailController;