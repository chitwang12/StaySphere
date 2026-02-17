require('ts-node/register'); //This line enables typescript support 
const config = require('./db.config');
console.log(config);
module.exports = config;
