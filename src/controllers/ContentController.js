var Content = require("../dao/Content");
const jwt = require("jsonwebtoken");
let mySecretKey = "s3j4jljvvxuyılmb";

/* exports.getCityListABC = function (req, res) {
  Content.getCityListABC(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
}; */
//
exports.getGenderFunction = function (req, res) {
  Content.getGenderFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.getIncomeTypeFunction = function (req, res) {
  Content.getIncomeTypeFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.getFlatTypeFunction = function (req, res) {
  Content.getFlatTypeFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.getProjectStatusFunction = function (req, res) {
  Content.getProjectStatusFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.getFlatStatuFunction = function (req, res) {
  Content.getFlatStatuFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//
exports.postCityFunction = function (req, res) {
  Content.postCityFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postGenderFunction = function (req, res) {
  Content.postGenderFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postIncomeTypeFunction = function (req, res) {
  Content.postIncomeTypeFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postFlatTypeFunction = function (req, res) {
  Content.postFlatTypeFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postProjectStatusFunction = function (req, res) {
  Content.postProjectStatusFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

/**
 * ------put
 */
exports.putCityFunction = function (req, res) {
  Content.putCityFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putGenderFunction = function (req, res) {
  Content.putGenderFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putFlatTypeFunction = function (req, res) {
  Content.putFlatTypeFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putIncomeTypeFunction = function (req, res) {
  Content.putIncomeTypeFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putProjectStatusFunction = function (req, res) {
  Content.putProjectStatusFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

/**
 * DELETE
 */

exports.deleteCityFunction = function (req, res) {
  Content.deleteCityFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.deleteGenderFunction = function (req, res) {
  Content.deleteGenderFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.deleteIncomeTypeFunction = function (req, res) {
  Content.deleteIncomeTypeFunction(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//
exports.postLogin = function (req, res) {
  Content.postLogin(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.getCityListABC = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;

  Content.getCityListABC(function (err, data) {
    jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
        var returnVal = {
          result: "Failed",
          message: "Authentication Failed",
        };
        res.send(returnVal);
      } else {
        console.log(decoded);
        res.send(data);
      }
    });
  }, req.body);
};
