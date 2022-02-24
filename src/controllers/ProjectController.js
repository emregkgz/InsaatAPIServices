var Content = require("../dao/ProjectContent");

exports.getProjectList = function (req, res) {
  Content.getProjectList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.getFlatlist = function (req, res) {
  Content.getFlatlist(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.getEmployeeListFunction = function (req, res) {
  Content.getEmployeeListFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

/**
 * POST
 */
exports.postProjectListFunction = function (req, res) {
  Content.postProjectListFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postEmployeeFunction = function (req, res) {
  Content.postEmployeeFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postFlatFunction = function (req, res) {
  Content.postFlatFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

/**
|--------------------------------------------------
| PUT
|--------------------------------------------------
*/
exports.putProjectFunction = function (req, res) {
  Content.putProjectFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putFlatFunction = function (req, res) {
  Content.putFlatFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putEmployeeFunction = function (req, res) {
  Content.putEmployeeFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
