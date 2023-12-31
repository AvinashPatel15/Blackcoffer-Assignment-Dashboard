import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ArrowDown01, ArrowUp10 } from "lucide-react";
import ChartApi from "@/api/chart";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const CountryChart = () => {
  const [charData, setChartData] = useState([]);
  const getChart = async () => {
    try {
      const res = await ChartApi.CountryChartApi();
      setChartData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChart();
  }, []);

  const labels = charData.map((item) => item._id);
  const relevanceData = charData.map((item) => item.totalRelevance);
  const likelihoodData = charData.map((item) => item.totalLikelihood);
  const intensityData = charData.map((item) => item.totalIntensity);

  const data = {
    labels,
    datasets: [
      {
        label: "Total Relevance",
        data: relevanceData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Total Likelihood",
        data: likelihoodData,
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
      {
        label: "Total Intensity",
        data: intensityData,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex gap-3 justify-between items-center">
        <p className="text-lg">Country</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <Button>
              <BiDotsVerticalRounded size={25} />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="mt-[-10px] p-2 mr-16 rounded-[4px] bg-white">
            <DropdownMenuGroup>
              <div className="group hover:bg-[#eef3ee] rounded-[5px] p-1">
                <DropdownMenuItem className="flex gap-3 items-center cursor-pointer">
                  <ArrowUp10 className="h-5 w-5 group-hover:text-[#518554]" />
                  <p className="text-sm group-hover:text-[#518554]">
                    Ascending
                  </p>
                </DropdownMenuItem>
              </div>

              <div className="group hover:bg-[#eef3ee] rounded-[5px] p-1">
                <DropdownMenuItem className="flex gap-3 items-center cursor-pointer">
                  <ArrowDown01 className="h-5 w-5 group-hover:text-[#518554]" />
                  <p className="text-sm group-hover:text-[#518554]">
                    Descending
                  </p>
                </DropdownMenuItem>
              </div>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full m-auto">
        <Bar data={data} />
      </div>
    </div>
  );
};

export default CountryChart;
