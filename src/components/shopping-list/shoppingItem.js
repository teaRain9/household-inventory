import EditIcon from "@/components/icons/edit";
import CheckboxIcon from "../icons/checkbox";

import classes from './shoppingItem.module.scss'

function ShoppingItem({ name, shopList, urgent }) {
  return (
    <div className={`${classes.container} flex items-center shadow-sm mx-4 mb-4 p-8 rounded-lg`}>
      <div className='grow-0'>
        <CheckboxIcon />
      </div>
      <h3 className='grow'>{name}</h3>
      <ul className='flex  justify-start gap-4 grow'>
        {shopList.map((shop) => {
          return <li key={shop.id}>{shop.name}</li>;
        })}
      </ul>
      <div className='grow-0'>
        <EditIcon />
      </div>
    </div>
  );
}

export default ShoppingItem;
