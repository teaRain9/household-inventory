import CheckIcon from "../icons/check";

import classes from "./shoppingItem.module.css";
import EditIcon from "@/components/icons/edit";

function ShoppingItem({ name, shopList, urgent }) {
  return (
    <div className={classes.container}>
      <div className={classes.check_icon}>
        <CheckIcon />
      </div>
      <h2 className={classes.title}>{name}</h2>
      <ul className={classes.shop_center}>
        {shopList.map((shop) => {
          return <li>{shop}</li>;
        })}
      </ul>
      <div className={classes.other_icons}>
        <EditIcon />
      </div>
    </div>
  );
}

export default ShoppingItem;
