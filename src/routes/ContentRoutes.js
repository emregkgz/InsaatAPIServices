// 'use strict';
const express = require("express");
const router = express.Router();

var contentController = require("../controllers/ContentController");

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

router.get("/getCityList", contentController.getCityListABC);
router.get("/getGenderList", contentController.getGenderFunction);
router.get("/getIncomeTypeList", contentController.getIncomeTypeFunction);
router.get("/getFlatTypeList", contentController.getFlatTypeFunction);
router.get("/getProjectStatusList", contentController.getProjectStatusFunction);
router.get("/getFlatStatu", contentController.getFlatStatuFunction);
/**
 * Post
 */
router.post("/postCity", contentController.postCityFunction);
router.post("/postGender", contentController.postGenderFunction);
router.post("/postIncomeType", contentController.postIncomeTypeFunction);
router.post("/postFlatType", contentController.postFlatTypeFunction);
router.post("/postProjectStatus", contentController.postProjectStatusFunction);

/**
 * put
 */

router.put("/putCity", contentController.putCityFunction);
router.put("/putGender", contentController.putGenderFunction);
router.put("/putIncomeType", contentController.putIncomeTypeFunction);
router.put("/putFlatType", contentController.putFlatTypeFunction);
router.put("/putProjectStatus", contentController.putProjectStatusFunction);

/**
 * DELETE
 */

router.delete("/deleteCity", contentController.deleteCityFunction);
router.delete("/deleteGender", contentController.deleteGenderFunction);
router.delete("/deleteIncomeType", contentController.deleteIncomeTypeFunction);

//LOgin
router.post("/postLogin", contentController.postLogin);

module.exports = router;
