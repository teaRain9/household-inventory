import Image from "next/image";
import CheckIcon from "../icons/check";


function ShoppingItem({name, shopList, urgent}) {
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
          <CheckIcon/>
          <button>Complete</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingItem;