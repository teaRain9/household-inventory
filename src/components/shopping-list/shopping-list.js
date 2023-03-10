import ShoppingItem from "@/components/shopping-list/shoppingItem";

function ShoppingList({items}) {
  return (
    <ul className=' mt-28'>
      {items.map((item) => (
        <li key={item.id}>
          <ShoppingItem
            name={item.name}
            shopList={item.shoppingCenter}
            urgent={item.isUrgent}
          />
        </li>
      ))}
    </ul>
  );
}
export default ShoppingList;