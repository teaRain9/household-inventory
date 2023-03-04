import {getAllItems, getAllShoppingItems} from "../../../dummy-data";
import ShoppingList from "@/components/shopping-list/shopping-list";

function shoppingListPage() {

  const shoppingFilteredItems = getAllShoppingItems();
  return (
    <>
      <h1>shopping list</h1>
      <ShoppingList items={shoppingFilteredItems}/>
    </>
  )
}

export default shoppingListPage;