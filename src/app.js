var express = require('express');
var app = express();
var fs = require("fs");
const path = require('path');

var now = new Date();
var logfile_name = './src/logs/verbose-' + now.getFullYear() + "-"+ now.getMonth() + "-" + now.getDate() +'.log';

var trueLog = console.log;
console.logCopy = console.log.bind(console);
console.log = function(msg) {
    var timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')+"  || ";
    fs.appendFile(logfile_name,timestamp+"  ||  " + msg + "\n", function(err) {
        if(err) {
            return trueLog(err);
        }
    });
    this.logCopy(msg);
};


fs.existsSync(logfile_name, function(exists) {
    if (!exists) {
        fs.writeFile(logfile_name);
    }
});

var routes = require('./routes.js');


/*app.get('*',routes.Anypath );
app.post('*',routes.Anypath ); */
app.post('/rest/AccountBalanceInquiry',routes.AccountBalanceInquiry );
app.post('/rest/TitleFetch',routes.TitleFetch );
app.post('//rest/IBFT',routes.IBFT );
app.post('//rest/FundsTransfer',routes.FundsTransfer );
app.post('//rest/MiniStatement',routes.MiniStatement );



var server = app.listen(6003, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Branchless Host listening at port:" + port);
});
