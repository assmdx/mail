'use strict';
const settings = require('./settings.js');
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537831167804_9604';
  config.logger={
      dir:path.join(appInfo.root, 'logs'),
  }
  // add your config here
  config.middleware = [];
  config.user = {
    username:"admin",
    passsword:"123"
  };
  config.mailSettings = settings;
  return config;
};
