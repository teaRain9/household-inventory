import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type as ListType
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import EditIcon from "@/components/icons/edit";
import CheckboxIcon from "../icons/checkbox";

import classes from './shoppingItem.module.scss'
import { useContext, useState } from 'react';
import SelectedItemsContext from '@/store/selectedItems-context';

function ShoppingItem({ item }) {

  const [itemChecked, setItemChecked] = useState(false)
  const selItemCtx = useContext(SelectedItemsContext)

  function toggleCheck() {
    setItemChecked(prevState => (!prevState))
    selItemCtx.OnAddItem(item)
    console.log(selItemCtx.selectedItems)
  }

  function toTitleCase(phrase) {
    let words = phrase.split(' ');
    for(let i=0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    return words.join(' ');
  }

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={toggleCheck}>
        <div className={classes.checked_action}>
          <p>Done</p>
        </div>
      </SwipeAction>
    </LeadingActions>
  );
  
   const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info('swipe action triggered')}
      >
        <div className={classes.delete}>
          Delete
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  
  return (
    <SwipeableList fullSwipe={false}>
      <SwipeableListItem
      
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div
          className={classes.container}
        >
          <div className={classes.title}>
            <CheckboxIcon checked={itemChecked} toggleCheck={toggleCheck}/>
            <h3>{toTitleCase(item.name)}</h3>
          </div>
          <div className={classes.shop_center}>
            <p>{item.shoppingCenter.map(item => item.name).join('  |  ')}</p>
          </div>
          <div>
            <EditIcon />
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );


}

export default ShoppingItem;
