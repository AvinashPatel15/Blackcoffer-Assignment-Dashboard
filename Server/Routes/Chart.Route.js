const {
  getChartsData,
  postData,
} = require("../Controllers/getChart.Controller");

const chartRouter = require("express").Router();

chartRouter.route("/data").get(getChartsData).post(postData);

module.exports = {
  chartRouter,
};
