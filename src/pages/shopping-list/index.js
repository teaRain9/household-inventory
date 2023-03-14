import {getItemsByPool} from "../../../data/dummy-data";
import ShoppingList from "@/components/shopping-list/shopping-list";
import ActiveContext from "@/store/active-context";
import { useContext, useEffect } from "react";




function shoppingListPage() {
  const shoppingFilteredItems = getItemsByPool('shopping-list');
  const activeCtx = useContext(ActiveContext)
  activeCtx.onChangeCategory("shopping-list")

  return <ShoppingList items={shoppingFilteredItems}/>;
}

export default shoppingListPage;