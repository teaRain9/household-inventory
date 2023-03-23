import classes from './main-navigation.module.scss'
import ActiveContext from "@/store/active-context";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import HomeIcon from "../icons/home";
import InventoryIcon from "../icons/inventory";
import MoreIcon from "../icons/more";
import CreateNewIcon from "../icons/new";
import ShoppingIcon from "../icons/shopping";
import { useRouter } from 'next/router';

function MainNavigation() {

  const activeCtx = useContext(ActiveContext);

  const router = useRouter();

  const activePath = router.asPath.slice(1);



  return (
    <nav className={classes.container}>
      <ul>
        <li className={activeCtx.category === 'home' ? classes.active : classes.inactive}>
          <Link href="/">
            <ShoppingIcon />
            {activeCtx.category !== 'home' && <p className=" text-xs pt-1">Shopping List</p>}
          </Link>
        </li>
        <li className={activeCtx.category === 'add-new' ? classes.active : classes.inactive}>
          <Link href="/add-new">
            <CreateNewIcon />
            {activeCtx.category !== 'add-new' && <p className=" text-xs pt-1">Add New</p>}
          </Link>
        </li>
        <li className={activeCtx.category === 'in-stock' ? classes.active : classes.inactive}>
          <Link href="/instock">
            <InventoryIcon />
            {activeCtx.category !== 'in-stock' && <p className=" text-xs pt-1">In Stock</p>}
          </Link>
        </li>

      </ul>
    </nav>
  );
    
}

export default MainNavigation;