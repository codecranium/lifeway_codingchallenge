'strict mode';

const _ = require('lodash');
const conf = require('../globalConfigFactory');
let app = require('../webserver.js');    

const controllerPath = '/increment';

let counter = {
    currentIncrementValue: 0,
    consumedValues: []
};

// Post a value, to increase the increment counter.
app.post(controllerPath, (request, response) => {
    // console.log('accepting data of: ' + JSON.stringify(request.body));
    if (request.body && request.body.id && request.body.message) {  // Validate that the incoming payload contains: [id] and [message]... if not then respond with invalid message and coordinating error.
        if (counter.consumedValues.some(id => id == request.body.id)) {
            // already accepted, do not increment with the submitted value again.
            response.status(500).json({error: 'Invalid value for [id].  Only unique [id] value is acceptable.'})
        }
        else {
            counter.consumedValues.push(request.body.id);
            const reqCount = request.body.message.split(' ').length;
            counter.currentIncrementValue += reqCount;
            response.json({count: counter.currentIncrementValue});
        }
    }
    
    response.status(405).json({error: 'Values presented in the payload do not match the expected request structure.  The JSON request should fit the following structure:   { "id": "123", "message": "hello world" }'});
})

// Get current count state
app.get(controllerPath, (request, response) => {
    response.json(counter);
})
