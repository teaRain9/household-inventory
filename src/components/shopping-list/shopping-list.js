import classes from './shopping-list.module.scss'

import ShoppingItem from "@/components/shopping-list/shoppingItem";
import SelectedItemsContext from "@/store/selectedItems-context";
import { useContext } from "react";

function ShoppingList({items}) {

  const selItemsCtx = useContext(SelectedItemsContext)
  return (
    <main className={classes.container}>
      {selItemsCtx.selectedItems.length > 1 &&
      <div className={classes.button_section}>
        <button className={classes.button}>Update</button>
      </div>
      }
      <ul className={classes.shopping_list}>
        {items.map((item) => (
          <li key={item.id}>
            <ShoppingItem item={item} />
          </li>
        ))}
      </ul>
      <ul>
        {selItemsCtx.selectedItems.map((data) => (
          <li className="text-white" key={data.id}>
            {data.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
export default ShoppingList;