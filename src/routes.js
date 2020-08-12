const pathToResponseFolder =  __dirname + "/responses/";

// AccountBalanceInquiry
var fs = require("fs");

exports.AccountBalanceInquiry = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "balanceInquiry.json");
  console.log("AccountBalanceInquiry"+data);  
  res.end(data);
};

// TitleFetch
exports.TitleFetch = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "titleFetch.json");
  console.log("TitleFetch"+data);  
  res.end(data);
};

// IBFT
exports.IBFT = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "ibft.json");
  console.log("IBFT" + "," +data);  
  res.end(data);
};

// FundsTransfer
exports.FundsTransfer = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "fundTransfer.json");
  console.log("FundsTransfer"+data);  
  res.end(data);
};

// MiniStatement
exports.MiniStatement = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "miniStatement.json");
  console.log("MiniStatement"+data);  
  res.end(data);
};

// CashWithdrawal
exports.CashWithdrawal = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "miniStatement.json");
  console.log("CashWithdrawal"+data);  
  res.end(data);
};

// Anypath
exports.Anypath = function (req, res) {
  var data = fs.readFileSync(pathToResponseFolder + "miniStatement.json");
  console.log(req.url);  
  res.end(data);
};