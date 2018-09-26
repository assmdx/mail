const Service = require('egg').Service;
const nodemailer = require('nodemailer');

class MailService extends Service {

    async add(settings) {
        const {
            ctx,
            service,
            app
        } = this;
        this.app.config.settings = settings;
        const log = ctx.logger;
        log.info('changed mail settings',settings);
        return settings
    }
    sendMail(email,text,subject,html) {
        const {
            ctx,
            app
        } = this;
        const log = ctx.logger;
        const settings = app.config.settings;
        let transporter = nodemailer.createTransport({
            service:settings.service,
            host:settings.host,
            secure:settings.secure,
            port:settings.port,
            auth:{
                user: settings.user,
                pass: settings.pass
            }
        });
        log.warn(settings);
        let mailOptions = {
            from : settings.user,
            to : email,
            text: text,
            subject: subject,
            html: html
        };
        return transporter.sendMail(mailOptions);
    }
}

module.exports = MailService;