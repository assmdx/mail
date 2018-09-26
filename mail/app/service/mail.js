const Service = require('egg').Service;
const nodemailer = require('nodemailer');

class MailService extends Service {

    async add(settings) {
        const {
            ctx,
            service,
            app
        } = this;
        app.config.settings = settings;
        return settings
    }
    async send(email,text) {
        const {
            app
        } = this;
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
        }
        transporter.sendMail(mailOptions,(error,info) =>{
            if(error){
                return console.error(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            return 'success'
        });
    }
}

module.exports = MailService;