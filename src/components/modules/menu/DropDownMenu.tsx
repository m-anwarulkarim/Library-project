import { FaCaretDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DropDownMenu() {
  return (
    <div>
      <DropdownMenu>
        <div className="flex">
          <div>
            <DropdownMenuTrigger className=" cursor-pointer ">
              Browse <FaCaretDown className="fixed ml-15 -mt-5" />
            </DropdownMenuTrigger>
          </div>
        </div>
        <DropdownMenuContent>
          <DropdownMenuLabel>Subject</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Library Explorer</DropdownMenuItem>
          <DropdownMenuItem>Random Books</DropdownMenuItem>
          <DropdownMenuItem>Lists</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropDownMenu;
