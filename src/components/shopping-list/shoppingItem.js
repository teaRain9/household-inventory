import Image from "next/image";
import CheckIcon from "../icons/check";

import classes from "./shoppingItem.module.css";
import EditIcon from "@/components/icons/edit";

function ShoppingItem({ name, shopList, urgent }) {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <ul>
          {shopList.map((shop) => {
            return <li>{shop}</li>;
          })}
        </ul>
        <div>
          <CheckIcon />
          <EditIcon />
          <button>Complete</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingItem;
