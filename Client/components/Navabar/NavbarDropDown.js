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
  Keyboard,
  LogOut,
  MailPlus,
  Settings,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const NavbarDropDown = () => {
  return (
    <div>
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
            <DropdownMenuItem className="flex gap-3 items-center cursor-pointer hover:bg-black">
              <User className="h-5 w-5" />
              <p className="text-base">Profile</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-3 items-center cursor-pointer hover:bg-black">
              <CreditCard className="h-5 w-5" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-3 items-center cursor-pointer hover:bg-black">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="border-b" />
          <DropdownMenuGroup>
            <a href="mailto:avinashpatel9755@gmail.com" target="_blank">
              <DropdownMenuItem className="flex gap-3 items-center cursor-pointer hover:bg-black">
                <MailPlus className="h-5 w-5" />
                <p className="text-base">Mail</p>
              </DropdownMenuItem>
            </a>
            <a href="https://github.com/AvinashPatel15" target="_blank">
              <DropdownMenuItem className="flex gap-3 items-center cursor-pointer hover:bg-black">
                <Github className=" h-5 w-5" />
                <span>Github</span>
              </DropdownMenuItem>
            </a>
            <a href="http://avinashpatel15.github.io/" target="_blank">
              <DropdownMenuItem className="flex gap-3 items-center cursor-pointer hover:bg-black">
                <Globe className=" h-5 w-5" />
                <span>Portfolio</span>
              </DropdownMenuItem>
            </a>
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="border-b" />
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex gap-3 items-center cursor-pointer hover:bg-black">
              <LogOut className="h-5 w-5 text-red-500" />
              <p className="text-base text-red-500">Logout</p>
              <DropdownMenuShortcut className="text-red-500">
                ⇧⌘Q
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarDropDown;
