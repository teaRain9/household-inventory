import ActiveContext from "@/store/active-context";
import { useContext } from "react";
import ProfileIcon from "../icons/profile";

import classes from './main-header.module.scss'

function MainHeader() {

  const activeCtx = useContext(ActiveContext)
  const header = activeCtx.category.split("-").join(" ")
  return (
    <header className={`${classes.container} fixed top-0 p-8 m-0 w-full max-h-18 bg-fuchsia-500`}>
      <div className="flex-col justify-center items-center">
          <div className="flex justify-between">
              <div>
                <h1 className="uppercase font-bold text-white text-2xl drop-shadow-sm">{header}</h1>
              </div>
              <div className=" text-white text-2xl"><ProfileIcon /></div>
          </div>

      </div>
    </header>
  );
}

export default MainHeader;