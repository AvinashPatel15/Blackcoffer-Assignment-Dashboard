"use client";
import ChartApi from "@/api/chart";
import CarouselBox from "@/components/Dashboard/CarouselBox";
import CityChart from "@/components/Dashboard/Charts/CityChart";
import CountryChart from "@/components/Dashboard/Charts/CountryChart";
import IntensityChart from "@/components/Dashboard/Charts/IntensityChart";
import LikelihoodChart from "@/components/Dashboard/Charts/LikelihoodChart";
import RegionChart from "@/components/Dashboard/Charts/RegionChart";
import RelevanceChart from "@/components/Dashboard/Charts/RelevanceChart";
import TopicsChart from "@/components/Dashboard/Charts/TopicsChart";
import YearChart from "@/components/Dashboard/Charts/YearChart";
import MiniClock from "@/components/Dashboard/MiniClock";
import { useEffect, useState } from "react";

const getChart = async () => {
  try {
    const res = await ChartApi.getChartData();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getChart().then((res) => {
      setData(res);
    });
  }, []);

  console.log(data);
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Carousel (Hidden on Mobile and Tablet) */}
        <div className="hidden md:block md:col-span-2 rounded-[10px] shadow-sm">
          <CarouselBox />
        </div>

        {/* Clock And Date */}
        <div className="col-span-1 bg-white border rounded-[10px] shadow-sm">
          <MiniClock />
        </div>
      </div>

      {/* Intensity */}
      <div className="p-4 border rounded-[10px] shadow-sm bg-white">
        <IntensityChart data={data} />
      </div>

      {/*Likelihood */}
      <div className="w-full">
        {/* Likelihood */}
        <div className="p-4 border rounded-[10px] shadow-sm bg-white w-full">
          <LikelihoodChart data={data} />
        </div>
      </div>

      {/* Relevance, Year, and Country */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Relevance */}
        <div className="p-4 border rounded-[10px] shadow-sm bg-white">
          <RelevanceChart />
        </div>

        {/* Year */}
        <div className="p-4 border rounded-[10px] shadow-sm bg-white">
          <YearChart />
        </div>

        {/* Country */}
        <div className="p-4 border rounded-[10px] shadow-sm bg-white">
          <CountryChart />
        </div>
      </div>

      {/* Topics and Region */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Topics */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-2 bg-white">
          <TopicsChart />
        </div>

        {/* Region */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-1 bg-white ">
          <RegionChart />
        </div>
      </div>
    </div>
  );
}
