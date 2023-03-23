import ShoppingList from "@/components/shopping-list/shopping-list";
import { getItemsByPool } from "../../../data/dummy-data";

import { useContext , useEffect} from "react";
import ActiveContext from "@/store/active-context";

function inStock() {
  const instockItems = getItemsByPool('in-stock');

  const activeCtx = useContext(ActiveContext)
  useEffect(()=>{
    activeCtx.onChangeCategory("in-stock")
  }, [])


  return <ShoppingList items={instockItems}/>;
}

export default inStock;