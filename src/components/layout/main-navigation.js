import Link from "next/link";
import HomeIcon from "../icons/home";
import InventoryIcon from "../icons/inventory";
import MoreIcon from "../icons/more";
import CreateNewIcon from "../icons/new";
import ShoppingIcon from "../icons/shopping";

function MainNavigation() {
    return (
      <nav className=" bg-fuchsia-800 fixed bottom-0 w-full h-24">
        <ul className="flex justify-between flex-nowrap items-center w-full h-24 p-8 text-white">
          <li className="flex-col justify-centercursor-pointer text-center">
            <Link href='/'>
              <HomeIcon />
              <p className=" text-xs pt-1">Home</p>
            </Link>
          </li>
          <li className="flex-col justify-centercursor-pointer text-center">
            <Link href='/shopping-list'>
              <ShoppingIcon />
              <p className=" text-xs pt-1">shopping list</p>
            </Link>
          </li>
          <li className="flex-col justify-centercursor-pointer text-center">
            <Link href='/add-new'>
              <CreateNewIcon />
              <p className=" text-xs pt-1">add new</p>
            </Link>
          </li>
          <li className="flex-col justify-centercursor-pointer text-center">
            <Link href='/instock'>
              <InventoryIcon />
              <p className=" text-xs pt-1">inventory</p>
            </Link>
          </li>
          <li className="flex-col justify-centercursor-pointer text-center">
            <Link href='/setting'>
              <MoreIcon />
              <p className=" text-xs pt-1">more</p>
            </Link>
          </li>
        </ul>
      </nav>
    );
    
}

export default MainNavigation;