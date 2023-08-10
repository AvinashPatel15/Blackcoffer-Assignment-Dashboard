import axios from "axios";

export default class ChartApi {

    static async getChartData (){
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/chart`);
        // console.log(res.data)
        return res.data;
    }
}
