import classes from './add-new.module.scss'
import {useRef, useState} from "react";

export default function AddNew() {

  const nameRef = useRef()
  const [pool, setPool] = useState()
  const [shop, setShop] = useState([])
  const [category, setCategory] = useState([])

  function shopChangeHandler(e) {
    const {checked, value} = e.target;
    if(checked) {
      setShop(prevState => [...prevState, value])
    } else {
      setShop(prevState => prevState.filter(shop => shop !== value))
    }
  }


  function addToItemsHandler(event) {
    event.preventDefault();
    console.log(
      {
        name: nameRef.current.value,
        shop: shop,
        category: category,
        pool: pool
      })
  }

  return (
    <form className={classes.container} onSubmit={addToItemsHandler}>

      <h2 className={classes.title}>Name:</h2>
      <div className={classes.name_input}>
        <input ref={nameRef} type="text" id="item-name" placeholder='Item Name:'/>
      </div>

      <h2 className={classes.title}>Available in:</h2>
      <div className={classes.selection}>
        <div>
          <input type="checkbox" name='shopping-center' id='costco' value='costco' onChange={shopChangeHandler}/>
          <label htmlFor="costco"> Costco</label>
        </div>
        <div>
          <input type="checkbox" name='shopping-center' id='walmart' value='walmart' onChange={shopChangeHandler}/>
          <label htmlFor="walmart"> Walmart</label>
        </div>
        <div>
          <input type="checkbox" name='shopping-center' id='meat-shop' value='meat-shop' onChange={shopChangeHandler}/>
          <label htmlFor="meat-shop"> Meat Shop</label>
        </div>
      </div>

      <h2 className={classes.title}>Category:</h2>
      <div className={classes.selection}>
        <div>
          <input type="radio" name='pool' id='dairy' value='dairy' onChange={e => setCategory(e.target.value)}/>
          <label htmlFor="dairy">Dairy</label>
        </div>
        <div>
          <input type="radio" name='pool' id='produce' value='produce' onChange={e => setCategory(e.target.value)}/>
          <label htmlFor="produce">Produce</label>
        </div>
        <div>
          <input type="radio" name='pool' id='grain' value='grain' onChange={e => setCategory(e.target.value)}/>
          <label htmlFor="grain">Grain</label>
        </div>
      </div>

      <h2 className={classes.title}>Assigned to:</h2>
      <div className={classes.selection}>
        <div>
          <input type="radio" name='pool' id='none' value='none' onChange={e => setPool(e.target.value)}/>
          <label htmlFor="none">None </label>
        </div>
        <div>
          <input type="radio" name='pool' id='shopping-list' value='shopping-list' onChange={e => setPool(e.target.value)}/>
          <label htmlFor="shopping-list">Shopping List </label>
        </div>
        <div>
          <input type="radio" name='pool' id='inventory' value='inventory' onChange={e => setPool(e.target.value)}/>
          <label htmlFor="inventory">Inventory </label>
        </div>
      </div>
      <div className={classes.submit}>
        <button className={classes.button}>Add</button>
      </div>

    </form>
  )
}