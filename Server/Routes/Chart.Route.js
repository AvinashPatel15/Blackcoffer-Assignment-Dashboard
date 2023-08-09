const { getChartsData, postData } = require("../Controllers/Chart.Controller");

const chartRouter = require("express").Router();

/** For Getting All Data */

chartRouter.get("/", getChartsData);

/** For Post A Data */

chartRouter.post("/post", postData);

module.exports = {
  chartRouter,
};
