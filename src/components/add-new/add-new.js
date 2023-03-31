import classes from './add-new.module.scss'
import {useReducer} from "react";


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
    case 'SET_POOL': 
      return {...state, pool: action.value}
    default:
        return{...state}
  }
}

export default function AddNew() {

  const [formState, formDispatch] = useReducer(formReducer, 
    { name: '',
      nameValid: true,
      shoppingCenter: [],
      shoppingCenterIsValid: true,
      category: '',
      categoryIsValid: true,
      pool: 'none',
      formIsValid: true
    })

  const ACTION = {
    setName: 'SET_NAME',
    updateShop: 'UPDATE_SHOP',
    updateCat: 'UPDATE_CATEGORY',
    setPool: 'SET_POOL',
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

      <fieldset className={classes.selection}
                onChange={(e) => 
                  formDispatch({type: ACTION.updateShop, checked: e.target.checked, value: e.target.value})
              }
                >
        <legend className={classes.title}>Available in:</legend>
        <div>
          <input
            type="checkbox"
            name="shoppingCenter"
            id="costco"
            value="costco"
          />
          <label htmlFor="costco"> Costco</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="shoppingCenter"
            id="walmart"
            value="walmart"
          />
          <label htmlFor="walmart"> Walmart</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="shoppingCenter"
            id="meat-shop"
            value="meat-shop"
          />
          <label htmlFor="meat-shop"> Meat Shop</label>
        </div>
      </fieldset>

      <fieldset className={classes.selection}
                onChange={(e) =>
                formDispatch({ type: ACTION.updateCat, value: e.target.value })
                }
            >
        <legend className={classes.title}>Category:</legend>
        <div>
          <input
            type="radio"
            name="category"
            id="dairy"
            value="dairy"
          />
          <label htmlFor="dairy">Dairy</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="produce"
            value="produce"
          />
          <label htmlFor="produce">Produce</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="grain"
            value="grain"
          />
          <label htmlFor="grain">Grain</label>
        </div>
      </fieldset>

      <fieldset className={classes.selection}            
            onChange={(e) =>
              formDispatch({ type: ACTION.setPool, value: e.target.value })
            }
      >
        <legend className={classes.title}>Assigned to:</legend>
        <div>
          <input
            type="radio"
            name="pool"
            id="none"
            value="none"
            defaultChecked
          />
          <label htmlFor="none">None </label>
        </div>
        <div>
          <input
            type="radio"
            name="pool"
            id="shopping-list"
            value="shopping-list"
          />
          <label htmlFor="shopping-list">Shopping List </label>
        </div>
        <div>
          <input
            type="radio"
            name="pool"
            id="inventory"
            value="inventory"
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