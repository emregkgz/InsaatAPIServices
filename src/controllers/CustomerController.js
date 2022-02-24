var Customer = require("../dao/CustomerContent");

exports.getCustomerListFunction = function (req, res) {
  Customer.getCustomerListFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.getVisitFunction = function (req, res) {
  Customer.getVisitFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.getSalesFunction = function (req, res) {
  Customer.getSalesFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

/**
 * POST
 */
exports.postCustomerFunction = function (req, res) {
  Customer.postCustomerFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postVisitFunction = function (req, res) {
  Customer.postVisitFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postSalesFunction = function (req, res) {
  Customer.postSalesFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

/**
|--------------------------------------------------
| PUT
|--------------------------------------------------
*/

exports.putCustomer = function (req, res) {
  Customer.putCustomer(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putVisitFunction = function (req, res) {
  Customer.putVisitFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putSalesFunction = function (req, res) {
  Customer.putSalesFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
