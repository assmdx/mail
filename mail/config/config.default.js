'use strict';
const settings = require('./settings.js');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537831167804_9604';

  // add your config here
  config.middleware = [];

  config.mailSettings = settings;
  return config;
};
