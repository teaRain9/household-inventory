import ShoppingList from "@/components/shopping-list/shopping-list";
import { getItemsByPool } from "../../../dummy-data";

import { useContext } from "react";
import ActiveContext from "@/store/active-context";

function inStock() {
  const instockItems = getItemsByPool('in-stock');

  const activeCtx = useContext(ActiveContext)
  activeCtx.onChangeCategory("inventory")


  return <ShoppingList items={instockItems}/>;
}

export default inStock;