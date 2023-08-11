const { chartModel } = require("../Models/Chart.Model");

// Getting all the data

const getChartsData = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalDocs = await chartModel.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    const chartData = await chartModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    return res.send({
      page,
      limit,
      totalPages,
      totalDocs,
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// Start Year

const startYear = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalDocs = await chartModel.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    const chartData = await chartModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    return res.send({
      page,
      limit,
      totalPages,
      totalDocs,
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// End Year

const endYear = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalDocs = await chartModel.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    const chartData = await chartModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    return res.send({
      page,
      limit,
      totalPages,
      totalDocs,
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// Intensity

const Intensity = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalDocs = await chartModel.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    const chartData = await chartModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    return res.send({
      page,
      limit,
      totalPages,
      totalDocs,
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// Sector

const Sector = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalDocs = await chartModel.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    const chartData = await chartModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    return res.send({
      page,
      limit,
      totalPages,
      totalDocs,
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// Topic

const Topic = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalDocs = await chartModel.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    const chartData = await chartModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    return res.send({
      page,
      limit,
      totalPages,
      totalDocs,
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// Region

const Region = async (req, res) => {
  try {
    const chartData = await chartModel.aggregate([
      {
        $match: {
          region: { $ne: "", $not: /^United States of America$/i }, // Exclude documents with empty country field
        },
      },
      {
        $group: {
          _id: "$region",
          totalRelevance: { $sum: "$relevance" },
          totalLikelihood: { $sum: "$likelihood" },
          totalIntensity: { $sum: "$intensity" },
        },
      },
    ]);

    return res.send({
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// Added Date

const addedDate = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalDocs = await chartModel.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    const chartData = await chartModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    return res.send({
      page,
      limit,
      totalPages,
      totalDocs,
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// Published Date

const publishedDate = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalDocs = await chartModel.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    const chartData = await chartModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    return res.send({
      page,
      limit,
      totalPages,
      totalDocs,
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// Country

const Country = async (req, res) => {
  try {
    const chartData = await chartModel.aggregate([
      {
        $match: {
          country: { $ne: "", $not: /^United States of America$/i }, // Exclude documents with empty country field
        },
      },
      {
        $group: {
          _id: "$country",
          totalRelevance: { $sum: "$relevance" },
          totalLikelihood: { $sum: "$likelihood" },
          totalIntensity: { $sum: "$intensity" },
        },
      },
    ]);

    return res.send({
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// Relevance

const Relevance = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalDocs = await chartModel.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    const chartData = await chartModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    return res.send({
      page,
      limit,
      totalPages,
      totalDocs,
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// Pestle

const Pestle = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalDocs = await chartModel.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    const chartData = await chartModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    return res.send({
      page,
      limit,
      totalPages,
      totalDocs,
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// Likelihood

const Likelihood = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalDocs = await chartModel.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    const chartData = await chartModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    return res.send({
      page,
      limit,
      totalPages,
      totalDocs,
      data: chartData,
    });
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

// Post data

const postData = async (req, res) => {
  try {
    const chartData = await chartModel.create(req.body);
    return res.send(chartData);
  } catch (error) {
    return res.status(401).send({ message: "Something Went Wrong!", error });
  }
};

module.exports = {
  getChartsData,
  startYear,
  endYear,
  Pestle,
  Relevance,
  Country,
  publishedDate,
  addedDate,
  Region,
  Topic,
  Sector,
  Intensity,
  Likelihood,
  postData,
};
