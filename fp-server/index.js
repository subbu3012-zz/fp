const app = require('express')();
const routes = require('./routes');

/**Assign the app to use the routes for routing from routes.js */
app.use('/', routes);

/**Assign a port number to listen to */
const portNumber = 1337;
app.listen(portNumber, function () {
    console.log('Listening to port ' + portNumber + '...')
});