import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  CreditCard,
  Github,
  Globe,
  LogOut,
  MailPlus,
  Settings,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const NavbarDropDown = () => {
  return (
    <div className="bg-white">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mt-1 mr-3 rounded-[10px] bg-white">
          <DropdownMenuLabel className="text-[16px] font-medium flex flex-col">
            <p className="cursor-pointer">Avinash Patel</p>
            <p className="cursor-pointer">avinashpatel9755@gmail.com</p>
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="border-b" />
          <DropdownMenuGroup>
            <div className="group hover:bg-[#eef3ee] rounded-[5px]">
              <DropdownMenuItem className="flex gap-3 items-center cursor-pointer">
                <User className="h-5 w-5 group-hover:text-[#518554]" />
                <p className="text-base group-hover:text-[#518554]">Profile</p>
              </DropdownMenuItem>
            </div>
            <div className="group hover:bg-[#eef3ee] rounded-[5px]">
              <DropdownMenuItem className="flex gap-3 items-center cursor-pointer ">
                <CreditCard className="h-5 w-5 group-hover:text-[#518554]" />
                <p className="text-base group-hover:text-[#518554]">Billing</p>
              </DropdownMenuItem>
            </div>
            <div className="group hover:bg-[#eef3ee] rounded-[5px]">
              <DropdownMenuItem className="flex gap-3 items-center cursor-pointer">
                <Settings className="h-5 w-5 group-hover:text-[#518554]" />
                <p className="text-base group-hover:text-[#518554]">Settings</p>
              </DropdownMenuItem>
            </div>
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="border-b" />
          <DropdownMenuGroup>
            <div className="group hover:bg-[#eef3ee] rounded-[5px]">
              <a href="mailto:avinashpatel9755@gmail.com" target="_blank">
                <DropdownMenuItem className="flex gap-3 items-center cursor-pointer">
                  <MailPlus className="h-5 w-5 group-hover:text-[#518554]" />
                  <p className="text-base group-hover:text-[#518554]">Mail</p>
                </DropdownMenuItem>
              </a>
            </div>
            <div className="group hover:bg-[#eef3ee] rounded-[5px]">
              <a href="https://github.com/AvinashPatel15" target="_blank">
                <DropdownMenuItem className="flex gap-3 items-center cursor-pointer">
                  <Github className=" h-5 w-5 group-hover:text-[#518554]" />
                  <p className="text-base group-hover:text-[#518554]">Github</p>
                </DropdownMenuItem>
              </a>
            </div>
            <div className="group hover:bg-[#eef3ee] rounded-[5px]">
              <a href="http://avinashpatel15.github.io/" target="_blank">
                <DropdownMenuItem className="flex gap-3 items-center cursor-pointer">
                  <Globe className=" h-5 w-5 group-hover:text-[#518554]" />
                  <p className="text-base group-hover:text-[#518554]">
                    Portfolio
                  </p>
                </DropdownMenuItem>
              </a>
            </div>
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="border-b" />
          <DropdownMenuGroup>
            <div className="group hover:bg-red-50 rounded-[5px]">
              <DropdownMenuItem className="group flex gap-3 items-center cursor-pointer">
                <LogOut className="h-5 w-5 text-red-500 group-hover:text-red-700" />
                <p className="text-base text-red-500 group-hover:text-red-700">
                  Logout
                </p>
                <DropdownMenuShortcut className="text-red-500 group-hover:text-red-700">
                  ⇧⌘Q
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarDropDown;
