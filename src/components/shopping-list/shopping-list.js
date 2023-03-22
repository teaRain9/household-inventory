import ShoppingItem from "@/components/shopping-list/shoppingItem";

function ShoppingList({items}) {
  return (
    <ul className=' mt-28'>
      {items.map((item) => (
        <li key={item.id}>
          <ShoppingItem item={item} />
        </li>
      ))}
    </ul>
  );
}
export default ShoppingList;