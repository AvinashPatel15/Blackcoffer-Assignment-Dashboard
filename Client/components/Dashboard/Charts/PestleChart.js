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
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const PestleChart = () => {
  const [page, setPage] = useState(1);
  const [charData, setChartData] = useState([]);

  const getChart = async (page) => {
    try {
      const res = await ChartApi.SectorChartApi(page);
      if (page == 1) {
        setChartData(res?.data);
      } else {
        setChartData((prev) => {
          return [...prev, ...res?.data];
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChart(page);
  }, [page]);

  const labels = charData.map((item) => item.pestle);
  const relevanceData = charData.map((item) => item.relevance);
  const likelihoodData = charData.map((item) => item.likelihood);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Relevance",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        data: relevanceData,
      },
      {
        label: "Likelihood",
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        data: likelihoodData,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
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
        <Bar data={data} options={chartOptions} />
      </div>

      <div className="mt-5 flex items-center justify-end gap-5">
        {page > 1 ? (
          <button
            className="px-5 py-4 text-white bg-teal-500 rounded-md border-none"
            onClick={() => setPage(1)}
          >
            Reset
          </button>
        ) : null}

        {page > 1 ? (
          <button
            className="px-5 py-4 text-blue bg-teal-100 rounded-md border-none"
            onClick={() => setPage(page - 1)}
          >
            Back to Prev
          </button>
        ) : null}

        <button
          className="px-5 py-4 text-white bg-teal-500 rounded-md border-none"
          onClick={() => setPage(page + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default PestleChart;
