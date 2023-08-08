"use client";
import CarouselBox from "@/components/Dashboard/CarouselBox";
import IntensityChart from "@/components/Dashboard/Charts/IntensityChart";
import MiniClock from "@/components/Dashboard/MiniClock";

export default function Home() {
  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-5 mb-5">
        {/* Carousel */}
        <div className="col-span-2 ">
          <CarouselBox />
        </div>

        {/* Clock And Date */}
        <div className="col-span-1 bg-white border rounded-[10px] shadow-sm ">
          <MiniClock />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-5">
        {/* Intensity */}
        <div className="p-2 border rounded-[15px] shadow-sm col-span-3 bg-white">
          <IntensityChart />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-5">
        {/* City  */}
        <div className="p-2 border rounded-[15px] shadow-sm col-span-1 bg-white"></div>

        {/* Likelihood */}
        <div className="p-2 border rounded-[15px] shadow-sm col-span-2 bg-white"></div>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-5">
        {/* Relevance */}
        <div className="p-2 border rounded-[15px] shadow-sm col-span-1 bg-white"></div>

        {/* Year */}
        <div className="p-2 border rounded-[15px] shadow-sm col-span-1 bg-white"></div>

        {/* Country */}
        <div className="p-2 border rounded-[15px] shadow-sm col-span-1 bg-white"></div>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-5">
        {/* Topics */}
        <div className="p-2 border rounded-[15px] shadow-sm col-span-2 bg-white"></div>

        {/* Region */}
        <div className="p-2 border rounded-[15px] shadow-sm col-span-1 bg-white"></div>
      </div>
    </div>
  );
}
