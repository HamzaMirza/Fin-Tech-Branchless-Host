var express = require('express');
var app = express();
var fs = require("fs");
const path = require('path');


const opts = {
    errorEventName:'error',
        logDirectory:'./src/logs/',
        fileNamePattern:'verbose-<DATE>.log',
        dateFormat:'YYYY-MM-DD'
};
var SimpleLogger = require('simple-node-logger'),
    manager = new SimpleLogger({ errorEventName:'error' }),
    logger;
manager.createConsoleAppender();
manager.createRollingFileAppender ( opts );
logger = manager.createLogger( '', 'trace' );


exports.logger = logger;

var routes = require('./routes.js');

app.post('/rest/AccountBalanceInquiry',routes.AccountBalanceInquiry );
app.post('/rest/TitleFetch',routes.TitleFetch );
app.post('//rest/IBFT',routes.IBFT );
app.post('//rest/FundsTransfer',routes.FundsTransfer );
app.post('//rest/MiniStatement',routes.MiniStatement );



var server = app.listen(6003, function () {
   var host = server.address().address;
   var port = server.address().port;
   logger.info("Branchless Host listening at port:" + port);
});
