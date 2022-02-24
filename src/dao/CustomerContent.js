//Config

const mssqlconfig = require("../../mssqlconfig");

// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
  console.log("Connected to SQL server successfully!");
});

// METHOD ...
exports.getSalesFunction = function (callback) {
  var FUNCTIONNAME = "getSalesFunction";

  var sqlStatement = `SELECT V.VisitID , CONVERT(varchar,V.VisitDate,103) AS 'VisitDate',V.Notes,V.CustomerID,V.ProjectID ,C.CustomerName,  C.CustomerSurname , P.ProjectName ,CONVERT(varchar,V.CreationDate,103) AS 'CreationDate' FROM Visit AS V
  LEFT JOIN Customer AS C ON C.CustomerID = V.CustomerID
  LEFT JOIN Project AS P ON V.ProjectID = P.ProjectID
  ORDER BY V.CreationDate `;

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
            result: "İşlem Başarılı!",
            message: "",
            SalesTable: result.recordsets[0],
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
exports.getVisitFunction = function (callback) {
  var FUNCTIONNAME = "getVisitFunction";

  var sqlStatement = `SELECT V.VisitID , CONVERT(varchar,V.VisitDate,103) AS 'VisitDate',V.Notes,V.CustomerID,V.ProjectID ,C.CustomerName,  C.CustomerSurname , P.ProjectName ,CONVERT(varchar,V.CreationDate,103) AS 'CreationDate' FROM Visit AS V
  LEFT JOIN Customer AS C ON C.CustomerID = V.CustomerID
  LEFT JOIN Project AS P ON V.ProjectID = P.ProjectID
  ORDER BY V.CreationDate `;

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
            result: "İşlem Başarılı!",
            message: "",
            VisitTable: result.recordsets[0],
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
exports.getCustomerListFunction = function (callback) {
  var FUNCTIONNAME = "getCustomerListFunction";

  var sqlStatement = `SELECT CustomerID, CustomerName , CustomerSurname ,GSM, TC, C.GenderID ,
   C.IncomeTypeID ,C.CityID, EMail, Address, G.GenderName, CT.CityName, CustomerNo, IT.IncomeTypeName, 
  CONVERT(varchar,BirthDate,23) AS 'BirthDate' , 
  CONVERT(varchar,C.CreationDate,23) AS 'CreationDate',
  CONVERT(varchar,C.UpdateDate,23) AS 'UpdateDate'
  FROM Customer AS C
  LEFT JOIN Gender AS G ON G.GenderID=C.GenderID
  LEFT JOIN City AS CT ON CT.CityID=C.CityID
  LEFT JOIN IncomeType AS IT ON IT.IncomeTypeID=C.IncomeTypeID
  ORDER BY CustomerName
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
            result: "İşlem Başarılı!",
            message: "",
            CustomerTable: result.recordsets[0],
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

exports.postSalesFunction = function (callback) {
  var FUNCTIONNAME = "postSalesFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO Sales(SalesDate,CustomerID,FlatID,Price,EmployeeID,Notes) VALUES ('${serviceParameters.SalesDate}',${serviceParameters.CustomerID},${serviceParameters.FlatID},${serviceParameters.Price},${serviceParameters.EmployeeID},'${serviceParameters.Notes}')`;

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
exports.postVisitFunction = function (callback) {
  var FUNCTIONNAME = "postVisitFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO Visit (VisitDate, CustomerID, ProjectID, Notes) VALUES ('${serviceParameters.VisitDate}','${serviceParameters.CustomerID}','${serviceParameters.ProjectID}','${serviceParameters.Notes}')`;

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
exports.postCustomerFunction = function (callback) {
  var FUNCTIONNAME = "postCustomerFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `INSERT INTO Customer (
    [CustomerName],
      [CustomerSurname],
      [GSM],
      [BirthDate],
      [TC],
      [EMail],
      [Address],
      [GenderID],
      [CityID],
      [CustomerNo],
      [IncomeTypeID]
    )
VALUES (
    '${serviceParameters.CustomerName}',
    '${serviceParameters.CustomerSurname}',		
    '${serviceParameters.GSM}',
    '${serviceParameters.BirthDate}',
    '${serviceParameters.TC}',
    '${serviceParameters.EMail}',
    '${serviceParameters.Address}',
    ${serviceParameters.GenderID},		
    ${serviceParameters.CityID},
    '${serviceParameters.CustomerNo}', 
    ${serviceParameters.IncomeTypeID}
    )`;
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
exports.putCustomer = function (callback) {
  var FUNCTIONNAME = "putCustomer";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE Customer SET
            [CustomerName] = '${serviceParameters.CustomerName}',
            [CustomerSurname] ='${serviceParameters.CustomerSurname}',
            [GSM] = '${serviceParameters.GSM}',
            [BirthDate]='${serviceParameters.BirthDate}',
            [TC]='${serviceParameters.TC}',
            [EMail]='${serviceParameters.EMail}',
            [Address]='${serviceParameters.Address}',
            [GenderID]=${serviceParameters.GenderID},
            [CityID]=${serviceParameters.CityID},
            [CustomerNo]='${serviceParameters.CustomerNo}',
            [UpdateDate]=getdate(),
            [IncomeTypeID]=${serviceParameters.IncomeTypeID}
            WHERE CustomerID = ${serviceParameters.CustomerID}`;
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
            result: "İşlem Başarılı!",
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
exports.putVisitFunction = function (callback) {
  var FUNCTIONNAME = "putVisitFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE Visit SET 
  VisitDate = '${serviceParameters.VisitDate}', 
  CustomerID = ${serviceParameters.CustomerID}, 
  ProjectID = ${serviceParameters.ProjectID}, 
  Notes = '${serviceParameters.Notes}' 
  WHERE VisitID = ${serviceParameters.VisitID}`;

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
exports.putSalesFunction = function (callback) {
  var FUNCTIONNAME = "putSalesFunction";
  var serviceParameters = arguments[1];
  var sqlStatement = `UPDATE Sales SET SalesDate='${serviceParameters.SalesDate}', 
  CustomerID='${serviceParameters.CustomerID}',
  FlatID='${serviceParameters.FlatID}',
  EmployeeID='${serviceParameters.EmployeeID}',
  Notes='${serviceParameters.Notes}' ,
  Price = '${serviceParameters.Price}' 
  WHERE SalesID= ${serviceParameters.SalesID}`;

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
