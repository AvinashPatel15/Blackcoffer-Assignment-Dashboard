"use client";
import CarouselBox from "@/components/Dashboard/CarouselBox";
import MiniClock from "@/components/Dashboard/MiniClock";
import CountryChart from "@/components/Dashboard/Charts/CountryChart";
import SectorChart from "@/components/Dashboard/Charts/SectorChart";
import TopicChart from "@/components/Dashboard/Charts/TopicChart";
import RegionChartIntensity from "@/components/Dashboard/Charts/RegionChartIntensity";
import RegionChartLikelihood from "@/components/Dashboard/Charts/RegionChartLikelihood";
import RegionChartRelevance from "@/components/Dashboard/Charts/RegionChartRelevance";
import PestleChart from "@/components/Dashboard/Charts/PestleChart";

export default function Home() {
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

      {/* Sector Chart */}
      <div className="p-4 border rounded-[10px] shadow-sm bg-white">
        <SectorChart />
      </div>

      {/* Region */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Region - Intensity */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-1 bg-white">
          <RegionChartIntensity />
        </div>

        {/* Region - Likelihood */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-1 bg-white ">
          <RegionChartLikelihood />
        </div>

        {/* Region - Relevance */}
        <div className="p-4 border rounded-[10px] shadow-sm col-span-1 bg-white ">
          <RegionChartRelevance />
        </div>
      </div>

      {/* Topic Chart */}
      <div className="w-full">
        {/* Topic Chart */}
        <div className="p-4 border rounded-[10px] shadow-sm bg-white w-full">
          <TopicChart />
        </div>
      </div>

      {/* Pestle Chart */}
      <div className="w-full m-auto">
        {/* Pestle Chart */}
        <div className="p-4 border rounded-[10px] shadow-sm bg-white w-full m-auto">
          <PestleChart />
        </div>
      </div>

      {/* Country Chart */}
      <div className="w-full m-auto">
        {/* Country Chart */}
        <div className="p-4 border rounded-[10px] shadow-sm bg-white w-full m-auto">
          <CountryChart />
        </div>
      </div>
    </div>
  );
}
