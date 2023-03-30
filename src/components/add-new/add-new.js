import classes from './add-new.module.scss'
import {useReducer, useRef, useState} from "react";

export default function AddNew() {

  const [pool, setPool] = useState('none')
  const [category, setCategory] = useState([])
  const [formState, formDispatch] = useReducer(formReducer, 
    { name: '',
      nameValid: true,
      shoppingCenter: [],
      shoppingCenterIsValid: true,
      category: [],
      categoryIsValid: true,
      pool: '',
      formIsValid: true
    })

  const ACTION = {
    setName: 'SET_NAME',
    updateShop: 'UPDATE_SHOP',
    updateCat: 'UPDATE_CATEGORY',
    setPool: 'SET_POOL',
  }

  function formReducer(state, action) {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name : action.value };
      case 'UPDATE_SHOP':
        if(action.checked) {
          return{...state, shoppingCenter: [...state.shoppingCenter, action.value]}
        } else {
          return{...state, shoppingCenter: state.shoppingCenter.filter(item => item !== action.value)}
        }
      case 'UPDATE_CATEGORY':
        return {...state, category: action.value}
      case 'UPDATE_POOL': 
        return {...state, pool: action.value}

    }
  }


  function shopChangeHandler(e) {
    const {checked, value} = e.target;
    formDispatch({type: ACTION.updateShop, checked, value})
  }


  function addToItemsHandler(event) {
    event.preventDefault();
    console.log(formState)
  }

  return (
    <form className={classes.container} onSubmit={addToItemsHandler}>
      <fieldset className={classes.name_input}>
        <legend className={classes.title}>Name:</legend>
        <input
          type="text"
          id="item-name"
          name="name"
          placeholder="Item Name:"
          onChange={(e) =>
            formDispatch({ type: ACTION.setName, value: e.target.value })
          }
        />
      </fieldset>

      <fieldset className={classes.selection}>
        <legend className={classes.title}>Available in:</legend>
        <div>
          <input
            type="checkbox"
            name="shoppingCenter"
            id="costco"
            value="costco"
            onChange={shopChangeHandler}
          />
          <label htmlFor="costco"> Costco</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="shoppingCenter"
            id="walmart"
            value="walmart"
            onChange={shopChangeHandler}
          />
          <label htmlFor="walmart"> Walmart</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="shoppingCenter"
            id="meat-shop"
            value="meat-shop"
            onChange={shopChangeHandler}
          />
          <label htmlFor="meat-shop"> Meat Shop</label>
        </div>
      </fieldset>

      <fieldset className={classes.selection}>
        <legend className={classes.title}>Category:</legend>
        <div>
          <input
            type="radio"
            name="category"
            id="dairy"
            value="dairy"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="dairy">Dairy</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="produce"
            value="produce"
            onChange={(e) =>
              formDispatch({ type: ACTION.updateCat, value: e.target.value })
            }         
            />
          <label htmlFor="produce">Produce</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="grain"
            value="grain"
            onChange={(e) =>
              formDispatch({ type: ACTION.updateCat, value: e.target.value })
            }         
          />
          <label htmlFor="grain">Grain</label>
        </div>
      </fieldset>

      <fieldset className={classes.selection}>
        <legend className={classes.title}>Assigned to:</legend>
        <div>
          <input
            type="radio"
            name="pool"
            id="none"
            value="none"
            checked={pool === "none"}
            onChange={(e) => setPool(e.target.value)}
          />
          <label htmlFor="none">None </label>
        </div>
        <div>
          <input
            type="radio"
            name="pool"
            id="shopping-list"
            value="shopping-list"
            onChange={(e) => setPool(e.target.value)}
          />
          <label htmlFor="shopping-list">Shopping List </label>
        </div>
        <div>
          <input
            type="radio"
            name="pool"
            id="inventory"
            value="inventory"
            onChange={(e) => setPool(e.target.value)}
          />
          <label htmlFor="inventory">Inventory </label>
        </div>
      </fieldset>
      <fieldset className={classes.submit}>
        <button className={classes.button}>Add</button>
      </fieldset>
    </form>
  );
}