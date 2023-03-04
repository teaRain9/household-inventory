function ShoppingItem({name, shopList, urgent}) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {shopList.map(shop => {
          return (
            <li>{shop}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ShoppingItem;