import ShoppingList from "@/components/shopping-list/shopping-list";
import { getItemsByPool } from "../../../dummy-data";

function inStock() {
  const instockItems = getItemsByPool('in-stock');
  return <ShoppingList items={instockItems}/>;
}

export default inStock;