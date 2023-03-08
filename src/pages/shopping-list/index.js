import {getItemsByPool} from "../../../dummy-data";
import ShoppingList from "@/components/shopping-list/shopping-list";

function shoppingListPage() {
  const shoppingFilteredItems = getItemsByPool('shopping-list');
  return <ShoppingList items={shoppingFilteredItems}/>;
}

export default shoppingListPage;