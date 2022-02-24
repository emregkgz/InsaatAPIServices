// 'use strict';
const express = require("express");
const router = express.Router();

var customerController = require("../controllers/CustomerController");

var cors = require("cors");
const app = express();

// Set up a whitelist and check against it:
var whitelist = ["http://localhost:3000", "http://example2.com"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Then pass them to cors:
app.use(cors(corsOptions));

app.use(require("body-parser").json());
// app.use(express.bodyParser({limit: '250mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,language"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

var bodyParser = {
  json: { limit: "500mb", extended: true },
  urlencoded: { limit: "500mb", extended: true },
};

router.get("/getCustomerList", customerController.getCustomerListFunction);
router.get("/getVisitList", customerController.getVisitFunction);
router.get("/getSalesList", customerController.getSalesFunction);

/**
 * POST
 */
router.post("/postCustomer", customerController.postCustomerFunction);
router.post("/postVisit", customerController.postVisitFunction);
router.post("/postSales", customerController.postSalesFunction);
/**
|--------------------------------------------------
| PUT
|--------------------------------------------------
*/
router.put("/putCustomer", customerController.putCustomer);
router.put("/putVisit", customerController.putVisitFunction);
router.put("/putSales", customerController.putSalesFunction);

module.exports = router;
