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
    sendMail(email,text) {
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
        let mailOptions = {
            from : settings.user,
            to : email,
            text: text
        };
        // return transporter.sendMail(mailOptions,(error,info) =>{
        //     if(error){
        //         //log.error('fail to send email',error);
        //         throw error;
        //     }
        //     return 'success'
        // });
        return transporter.sendMail(mailOptions);
    }
}

module.exports = MailService;