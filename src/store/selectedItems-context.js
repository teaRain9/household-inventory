import React, { useState } from "react";

const SelectedItemsContext = React.createContext({
    selectedItems: [],
    OnAddItem: ()=>{},
    OnRemoveItem: ()=>{}
})


export function SelectedItemsContextProvider(props) {

    const [selectedItems, setSelectedItems] = useState([])

    function addItemHandler(item) {
        setSelectedItems(prevState => {
            prevState.push(item);
            console.log(typeof(item));
            console.log(selectedItems)
        })
    }

    function removeItemHandler(id) {
        setSelectedItems(prevState => {
            return prevState.filter(items => (items.id !== id))
        })
    }

    return (
        <SelectedItemsContext.Provider value={
            {
            selectedItems: selectedItems,
            OnAddItem: addItemHandler,
            onRemoveItem: removeItemHandler
            }
        }>
            {props.children}
        </SelectedItemsContext.Provider>
    )
}

export default SelectedItemsContext;