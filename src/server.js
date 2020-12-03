const http = require('http');
const host = require('ip');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`
    Server is listen on PORT: ${port}
    And ip address: ${host.address()}
    `);
});