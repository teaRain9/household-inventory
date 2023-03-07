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
            <HomeIcon />
            <p className=" text-xs pt-1">Home</p>
          </li>
          <li className="flex-col justify-centercursor-pointer text-center">
            <ShoppingIcon />
            <p className=" text-xs pt-1">shopping list</p>
          </li>
          <li className="flex-col justify-centercursor-pointer text-center">
            <CreateNewIcon />
            <p className=" text-xs pt-1">add new</p>
          </li>
          <li className="flex-col justify-centercursor-pointer text-center">
            <InventoryIcon />
            <p className=" text-xs pt-1">inventory</p>
          </li>
          <li className="flex-col justify-centercursor-pointer text-center">
            <MoreIcon />
            <p className=" text-xs pt-1">more</p>
          </li>
        </ul>
      </nav>
    );
    
}

export default MainNavigation;