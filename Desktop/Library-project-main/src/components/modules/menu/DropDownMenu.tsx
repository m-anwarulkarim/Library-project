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
        <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1">
          Browse <FaCaretDown />
        </DropdownMenuTrigger>

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
