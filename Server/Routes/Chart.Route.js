const {
  getChartsData,
  postData,
  startYear,
  endYear,
  Sector,
  Intensity,
  Topic,
  Region,
  addedDate,
  publishedDate,
  Country,
  Relevance,
  Pestle,
  Likelihood,
} = require("../Controllers/Chart.Controller");

const chartRouter = require("express").Router();

/** Getting all the data route */

chartRouter.get("/", getChartsData);

/** Getting start year wise data route */

chartRouter.get("/start_year", startYear);

/** Getting end year wise data route */

chartRouter.get("/end_year", endYear);

/** Getting sector wise data route */

chartRouter.get("/sector", Sector);

/** Getting intensity wise data route */

chartRouter.get("/intensity", Intensity);

/** Getting topic wise data route */

chartRouter.get("/topic", Topic);

/** Getting region wise data route */

chartRouter.get("/region", Region);

/** Getting added date wise data route */

chartRouter.get("/added_date", addedDate);

/** Getting published date wise data route */

chartRouter.get("/published_date", publishedDate);

/** Getting country wise data route */

chartRouter.get("/country", Country);

/** Getting relevance wise data route */

chartRouter.get("/relevance", Relevance);

/** Getting pestle wise data route */

chartRouter.get("/pestle", Pestle);

/** Getting likelihood wise data route */

chartRouter.get("/likelihood", Likelihood);

/** Post a data route */

chartRouter.post("/post", postData);

module.exports = {
  chartRouter,
};
