import axios from "axios";

export default class ChartApi {

  static async SectorChartApi(page = 1) {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/chart/sector?page=${page}`
    );
    // console.log(res.data)
    return res.data;
  }

  static async TopicChartApi(page = 1) {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/chart/topic?page=${page}`
    );
    // console.log(res.data)
    return res.data;
  }

  static async CountryChartApi() {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/chart/country`
    );
    // console.log(res.data)
    return res.data;
  }

  static async PestleChartApi(page = 1) {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/chart/pestle?page=${page}`
    );
    // console.log(res.data)
    return res.data;
  }

  static async RegionChartApi() {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/chart/region`
    );
    // console.log(res.data)
    return res.data;
  }
}
