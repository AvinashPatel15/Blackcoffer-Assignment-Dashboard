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
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const SectorChart = () => {
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

  const data = {
    labels: charData.map((item) => item.sector),
    datasets: [
      {
        label: "Intensity",
        data: charData.map((item) => item.intensity),
        borderColor: "green",
        backgroundColor: "green",
        fill: false,
      },
      {
        label: "Likelihood",
        data: charData.map((item) => item.likelihood),
        borderColor: "red",
        backgroundColor: "red",
        fill: false,
      },
      {
        label: "Relevance",
        data: charData.map((item) => item.relevance),
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false,
      },
    ],
  };

  const option = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: false,
          text: "Intensity",
        },
      },
      x: {
        title: {
          display: true,
          text: "Sector",
        },
      },
    },
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex gap-3 justify-between items-center">
        <p className="text-lg">Sector</p>
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
        <Line data={data} options={option} />
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

export default SectorChart;
