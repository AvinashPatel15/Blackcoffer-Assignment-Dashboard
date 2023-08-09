const { chartModel } = require("../Models/Chart.Model");

const getChartsData = async (req, res) => {
  try {
    const chartData = await chartModel.find();
    return res.send(chartData);
  } catch (error) {
   return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

const postData = async (req, res) => {
    try {
      const chartData = await chartModel.create(req.body);
      return res.send(chartData);
    } catch (error) {
      return res.status(401).send({ message: "Something Went Wrong!", error });
    }
}

module.exports = {
  getChartsData,
  postData
};
