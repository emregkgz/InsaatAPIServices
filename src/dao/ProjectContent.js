//Config

const mssqlconfig = require("../../mssqlconfig");

// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
  console.log("Connected to SQL server successfully!");
});

// METHOD ...
exports.getProjectList = function (callback) {
  var FUNCTIONNAME = "getProjectList";

  var sqlStatement = `SELECT p.ProjectID,p.ProjectName, c.CityName, p.CityID, p.ProjectStatusID, ps.ProjectStatusName, 
  CONVERT(varchar,p.CreationDate,23) AS 'CreationDate'
  FROM Project p
  LEFT JOIN City c ON p.CityID = c.CityID
  LEFT JOIN ProjectStatus ps ON ps.ProjectStatusID = p.ProjectStatusID
  Order BY p.ProjectName`;

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
          ProjectTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "İşlem Başarılı!",
            message: "",
            ProjectTable: result.recordsets[0],
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

exports.getFlatlist = function (callback) {
  var FUNCTIONNAME = "getFlatlist";

  var sqlStatement = `SELECT FlatID, FlatNo, f.ProjectID,f.FlatTypeID,f.FlatStatusID,p.ProjectName, ft.FlatTypeName, fs.FlatStatusName, f.Price, CONVERT(varchar,f.CreationDate,103) AS CreationDate 
  FROM Flat f 
  LEFT JOIN Project p ON p.ProjectID = f.ProjectID 
  LEFT JOIN FlatType ft ON ft.FlatTypeID = f.FlatTypeID 
  LEFT JOIN FlatStatus fs ON fs.FlatStatusID = f.FlatStatusID 
  ORDER BY f.ProjectID,FlatNo`;

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
          FlatTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "İşlem Başarılı!",
            message: "",
            FlatTable: result.recordsets[0],
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
exports.getEmployeeListFunction = function (callback) {
  var FUNCTIONNAME = "getEmployeeListFunction";

  var sqlStatement = `SELECT EmployeeID, EmployeeName, EmployeeSurname, Username,Password,
  CONVERT(varchar,CreationDate,23) AS CreationDate 
  FROM Employee
  ORDER BY EmployeeName`;

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
          EmployeeTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "İşlem Başarılı!",
            message: "",
            EmployeeTable: result.recordsets[0],
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
 * POST
 */
exports.postEmployeeFunction = function (callback) {
  var FUNCTIONNAME = "postEmployeeFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO Employee (EmployeeName,EmployeeSurname,Username,Password) 
  VALUES ('${serviceParameters.EmployeeName}',
  '${serviceParameters.EmployeeSurname}',
  '${serviceParameters.Username}',
  '${serviceParameters.Password}')`;

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
          ProjectStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "İşlem Başarılı!",
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
exports.postFlatFunction = function (callback) {
  var FUNCTIONNAME = "postFlatFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO Flat (FlatNo,ProjectID,FlatTypeID,FlatStatusID,Price) 
  VALUES ('${serviceParameters.FlatNo}',
  ${serviceParameters.ProjectID},
  ${serviceParameters.FlatTypeID},
  ${serviceParameters.FlatStatusID},
  ${serviceParameters.Price})`;

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
          ProjectStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "İşlem Başarılı!",
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
exports.postProjectListFunction = function (callback) {
  var FUNCTIONNAME = "postProjectListFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO Project (ProjectName,CityID,ProjectStatusID) 
  VALUES ('${serviceParameters.ProjectName}',${serviceParameters.CityID},${serviceParameters.ProjectStatusID})`;

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
          ProjectStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "İşlem Başarılı!",
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

/**
|--------------------------------------------------
| PUT
|--------------------------------------------------
*/
exports.putProjectFunction = function (callback) {
  var FUNCTIONNAME = "putProjectFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE Project SET 
  ProjectName='${serviceParameters.ProjectName}' , 
  CityID =${serviceParameters.CityID} , 
  ProjectStatusID=${serviceParameters.ProjectStatusID} 
  WHERE ProjectID = ${serviceParameters.ProjectID}`;

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
          EmployeeTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "İşlem Başarılı!",
            message: "",
            EmployeeTable: result.recordsets[0],
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
exports.putFlatFunction = function (callback) {
  var FUNCTIONNAME = "putFlatFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE  Flat SET 
   FlatNo='${serviceParameters.FlatNo}',
   ProjectID=${serviceParameters.ProjectID},FlatTypeID=${serviceParameters.FlatTypeID}, 
   FlatStatusID=${serviceParameters.FlatStatusID}, 
   Price=${serviceParameters.Price} 
   WHERE FlatID=${serviceParameters.FlatID}`;

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
          EmployeeTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "İşlem Başarılı!",
            message: "",
            EmployeeTable: result.recordsets[0],
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
exports.putEmployeeFunction = function (callback) {
  var FUNCTIONNAME = "putEmployeeFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE Employee SET 
  EmployeeName = '${serviceParameters.EmployeeName}', 
  EmployeeSurname = '$serviceParameters.{EmployeeSurname}',
  Username = '${serviceParameters.Username}', 
  Password = ${serviceParameters.Password} 
  WHERE EmployeeID = ${serviceParameters.EmployeeID}`;

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
          EmployeeTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "İşlem Başarılı!",
            message: "",
            EmployeeTable: result.recordsets[0],
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
