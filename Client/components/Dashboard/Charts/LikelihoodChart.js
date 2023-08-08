import React from "react";
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

const LikelihoodChart = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex gap-3 justify-between items-center">
        <p className="text-lg">Likelihood</p>
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

      {/* <div>Chart</div> */}
    </div>
  );
};

export default LikelihoodChart;
