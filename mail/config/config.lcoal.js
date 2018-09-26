'use strict';
const path = require('path');
module.exports = appInfo => {
    return {
        security: {
            csrf: {
                useSession: true,          // if useSession set to true, the secret will keep in session instead of cookie
                cookieName: 'csrfToken',    // csrf token's cookie name
                sessionName: 'csrfToken',   // csrf token's session name
                headerName: 'x-csrf-token', // request csrf token's name in header
                bodyName: '_csrf',          // request csrf token's name in body
                queryName: '_csrf',         // request csrf token's name in query
            }
        },
        logger:{
            level:'DEBUG'
        }
    }
};