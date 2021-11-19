const http = require('http');
const app = require('./app');
require('dotenv').config({ path: './.env'})
const port = process.env.PORT || 6600;
const server = http.createServer(app);
server.listen(port);