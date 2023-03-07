import EditIcon from "@/components/icons/edit";
import CheckboxIcon from "../icons/checkbox";

function ShoppingItem({ name, shopList, urgent }) {
  return (
    <div className='flex items-center bg-purple-200 shadow-sm mx-4 mb-4 p-8 rounded-lg'>
      <div className='grow-0'>
        <CheckboxIcon />
      </div>
      <h2 className='grow'>{name}</h2>
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
