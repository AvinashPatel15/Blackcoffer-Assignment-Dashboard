"use client";
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

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Carousel */}
        <div className="col-span-2">
          <CarouselBox />
        </div>

        {/* Clock And Date */}
        <div className="col-span-1 bg-white border rounded-[10px] shadow-sm ">
          <MiniClock />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Intensity */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-3 bg-white">
          <IntensityChart />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* City  */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-1 bg-white">
          <CityChart />
        </div>

        {/* Likelihood */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-2 bg-white">
          <LikelihoodChart />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Relevance */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-1 bg-white">
          <RelevanceChart />
        </div>

        {/* Year */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-1 bg-white">
          <YearChart />
        </div>

        {/* Country */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-1 bg-white">
          <CountryChart />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Topics */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-2 bg-white">
          <TopicsChart />
        </div>

        {/* Region */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-1 bg-white">
          <RegionChart />
        </div>
      </div>
    </div>
  );
}
