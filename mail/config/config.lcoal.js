'use strict';
const path = require('path');
module.exports = appInfo => {
    return {
        security: {
            csrf: {
                enable:true,
                headerName: 'x-csrf-token',
                ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
            },
           domainWhiteList:['*']
        },
        logger:{
            level:'DEBUG'
        }
    }
};