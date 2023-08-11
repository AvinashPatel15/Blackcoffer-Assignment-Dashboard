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
import { ArrowDownZA, ArrowUpAZ } from "lucide-react";
import ChartApi from "@/api/chart";
import { Pie } from "react-chartjs-2";

const RegionChartIntensity = () => {
  const [charData, setChartData] = useState([]);
  const getChart = async () => {
    try {
      const res = await ChartApi.RegionChartApi();
      setChartData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChart();
  }, []);

  const labels = charData.map((item) => item._id);
  const values = charData.map((item) => item.totalIntensity);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#2196F3",
          "#FF9800",
          "#9C27B0",
          "#009688",
          "#CDDC39",
          "#3F51B5",
          "#FF5722",
          "#8BC34A",
          "#E91E63",
          "#00BCD4",
          "#673AB7",
          "#FFC107",
          "#607D8B",
          "#795548",
          "#FFEB3B",
          "#9E9E9E",
          "#F44336",
        ],
      },
    ],
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex gap-3 justify-between items-center">
        <p className="text-lg">Region - Intensity</p>
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
                  <ArrowUpAZ className="h-5 w-5 group-hover:text-[#518554]" />
                  <p className="text-sm group-hover:text-[#518554]">
                    Ascending
                  </p>
                </DropdownMenuItem>
              </div>

              <div className="group hover:bg-[#eef3ee] rounded-[5px] p-1">
                <DropdownMenuItem className="flex gap-3 items-center cursor-pointer">
                  <ArrowDownZA className="h-5 w-5 group-hover:text-[#518554]" />
                  <p className="text-sm group-hover:text-[#518554]">
                    Descending
                  </p>
                </DropdownMenuItem>
              </div>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default RegionChartIntensity;
