'strict mode';

const _ = require('lodash');
const conf = require('./globalConfigFactory'); // Extracted the implementation for the global configuration.
let app = require('./webserver.js');  // Extracted the implementation for the Express Server setup and configuration.

require('./controllers/IncrementController');
