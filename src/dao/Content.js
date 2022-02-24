//Config

const mssqlconfig = require("../../mssqlconfig");

// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
  console.log("Connected to SQL server successfully!");
});

const jwt = require("jsonwebtoken");
let mySecretKey = "s3j4jljvvxuyılmb";

// METHOD ...
exports.getCityListABC = function (callback) {
  var FUNCTIONNAME = "getCityListABC";

  var sqlStatement = `
		SELECT CityID, CityName , CONVERT(varchar, CreationDate, 103) AS 'CreationDate', CONVERT(varchar, UpdateDate, 103) AS 'UpdateDate' FROM dbo.City
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          CitiesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            CityTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.getGenderFunction = function (callback) {
  var FUNCTIONNAME = "getGenderFunction";

  var sqlStatement = `
  SELECT GenderID, GenderName , CONVERT(varchar, CreationDate, 103) AS 'CreationDate', CONVERT(varchar, UpdateDate, 103) AS 'UpdateDate'FROM Gender ORDER BY GenderName
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            GenderTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.getIncomeTypeFunction = function (callback) {
  var FUNCTIONNAME = "getIncomeTypeFunction";

  var sqlStatement = ` SELECT IncomeTypeID,IncomeTypeName  FROM IncomeType  ORDER BY IncomeTypeName`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            IncomeTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.getProjectStatusFunction = function (callback) {
  var FUNCTIONNAME = "getProjectStatusFunction";

  var sqlStatement = `SELECT ProjectStatusID, ProjectStatusName, CONVERT(varchar, CreationDate, 103) AS 'CreationDate', CONVERT(varchar, UpdateDate, 103) AS 'UpdateDate' FROM ProjectStatus`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            ProjectStatusTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.getFlatTypeFunction = function (callback) {
  var FUNCTIONNAME = "getFlatTypeFunction";

  var sqlStatement = ` SELECT FlatTypeID,FlatTypeName , CONVERT(varchar, CreationDate, 103) AS 'CreationDate', CONVERT(varchar, UpdateDate, 103) AS 'UpdateDate'FROM dbo.FlatType`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.getFlatStatuFunction = function (callback) {
  var FUNCTIONNAME = "getFlatTypeFunction";

  var sqlStatement = ` SELECT FlatStatusID,FlatStatusName , CONVERT(varchar, CreationDate, 23) AS 'CreationDate', CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'FROM dbo.FlatStatus`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatStatuTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

/**
 POST SERVİCE
 */

exports.postCityFunction = function (callback) {
  var FUNCTIONNAME = "postCityFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO City (CityName) VALUES ('${serviceParameters.CityName}')`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.postGenderFunction = function (callback) {
  var FUNCTIONNAME = "postGenderFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO Gender (GenderName) VALUES ('${serviceParameters.GenderName}')`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.postIncomeTypeFunction = function (callback) {
  var FUNCTIONNAME = "postIncomeTypeFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO IncomeType (IncomeTypeName) VALUES ('${serviceParameters.IncomeTypeName}')`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.postFlatTypeFunction = function (callback) {
  var FUNCTIONNAME = "postFlatTypeFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO FlatType (FlatTypeName) VALUES ('${serviceParameters.FlatTypeName}')`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.postProjectStatusFunction = function (callback) {
  var FUNCTIONNAME = "postProjectStatusFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO ProjectStatus (ProjectStatusName) VALUES ('${serviceParameters.ProjectStatusName}')`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

/**
 * PUT
 */
exports.putCityFunction = function (callback) {
  var FUNCTIONNAME = "putCityFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE City SET CityName='${serviceParameters.CityName}' WHERE CityID = ${serviceParameters.CityID}`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.putGenderFunction = function (callback) {
  var FUNCTIONNAME = "putGenderFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE Gender SET GenderName='${serviceParameters.GenderName}',UpdateDate=getdate()  WHERE GenderID = ${serviceParameters.GenderID}`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.putIncomeTypeFunction = function (callback) {
  var FUNCTIONNAME = "putIncomeTypeFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE IncomeType SET IncomeTypeName='${serviceParameters.IncomeTypeName}' WHERE IncomeTypeID = ${serviceParameters.IncomeTypeID}`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.putFlatTypeFunction = function (callback) {
  var FUNCTIONNAME = "putFlatTypeFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE FlatType SET FlatTypeName = '${serviceParameters.FlatTypeName}' WHERE FlatTypeID = ${serviceParameters.FlatTypeID}`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.putProjectStatusFunction = function (callback) {
  var FUNCTIONNAME = "putProjectStatusFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE ProjectStatus SET ProjectStatusName='${serviceParameters.ProjectStatusName}' WHERE ProjectStatusID = ${serviceParameters.ProjectStatusID}`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

/**
 * DELETE
 */
exports.deleteCityFunction = function (callback) {
  var FUNCTIONNAME = "deleteCityFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE City SET CityName='${serviceParameters.CityName}' WHERE CityID = ${serviceParameters.CityID}`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.deleteGenderFunction = function (callback) {
  var FUNCTIONNAME = "deleteGenderFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `DELETE From Gender  WHERE GenderID = ${serviceParameters.GenderID}`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.deleteIncomeTypeFunction = function (callback) {
  var FUNCTIONNAME = "deleteIncomeTypeFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = ` DELETE FROM IncomeType  WHERE IncomeTypeID=${serviceParameters.IncomeTypeID}`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            data: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

//loginpost

exports.postLogin = function (callback) {
  var FUNCTIONNAME = "postLogin";
  var serviceParameters = arguments[1];
  var sqlStatement = ` SELECT  email FROM Users 
  WHERE email='${serviceParameters.email}' AND password='${serviceParameters.password}'`;
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          data: null,
        };
      } else {
        if (result.recordsets[0].length > 0) {
          const myData = { emailAddress: serviceParameters.email };
          let jwtToken = jwt.sign(myData, mySecretKey, { expiresIn: "1800s" });
          var returnVal = {
            result: "Success",
            message: "",
            jwt: jwtToken,
          };
        } else {
          var returnVal = {
            result: "Fail/Invailed User",
            message: "",
            jwt: null,
          };
        }
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
