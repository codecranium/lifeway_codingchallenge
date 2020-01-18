const _ = require('lodash');

const config = require('./config.json');
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

// Best practice all global variables should be referenced via [global.] syntax and their names should always begin with 'g'
// global.gConfig = finalConfig;  // Alternative solution, you can assign the config values to a global value which would be accessed from using:  global.gConfig...

module.exports = finalConfig;