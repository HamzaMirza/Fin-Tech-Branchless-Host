const pathToResponseFolder =  __dirname + "/responses/";


var fs = require("fs");
var logger = require("./app.js").logger;

// AccountBalanceInquiry
exports.AccountBalanceInquiry = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "balanceInquiry.json");
  logger.info("AccountBalanceInquiry"+data);  
  res.end(data);
};

// TitleFetch
exports.TitleFetch = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "titleFetch.json");
  logger.info("TitleFetch"+data);  
  res.end(data);
};

// IBFT
exports.IBFT = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "ibft.json");
  logger.info("IBFT" + "," +data);  
  res.end(data);
};

// FundsTransfer
exports.FundsTransfer = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "fundTransfer.json");
  logger.info("FundsTransfer"+data);  
  res.end(data);
};

// MiniStatement
exports.MiniStatement = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "miniStatement.json");
  logger.info("MiniStatement"+data);  
  res.end(data);
};

// CashWithdrawal
exports.CashWithdrawal = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "miniStatement.json");
  logger.info("CashWithdrawal"+data);  
  res.end(data);
};

// Anypath
exports.Anypath = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "miniStatement.json");
  logger.info(req.url);  
  res.end(data);
};