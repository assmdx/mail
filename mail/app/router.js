'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.post('/mail/add', controller.api.mail.addSetting);
    router.post('/mail/send', controller.api.mail.sendMail);
};
