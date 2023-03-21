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

function ShoppingItem({ name, shopList, urgent }) {

  function toTitleCase(phrase) {
    let words = phrase.split(' ');
    for(let i=0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    return words.join(' ');
  }

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.info('swipe action triggered')}>
        <div className={classes.checked_action}>
          <p>Checked</p>
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
    <SwipeableList fullSwipe={true} threshold={true} >
      <SwipeableListItem
      
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div
          className={classes.container}
        >
          <div className="grow-0">
            <CheckboxIcon />
          </div>
          <h3 className="grow">{toTitleCase(name)}</h3>
          <ul className="flex  justify-start gap-4 grow">
            {shopList.map((shop) => {
              return <li key={shop.id}>{toTitleCase(shop.name)}</li>;
            })}
          </ul>
          <div className="grow-0">
            <EditIcon />
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );


}

export default ShoppingItem;
