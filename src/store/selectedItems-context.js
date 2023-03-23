import React, { useState } from "react";

const SelectedItemsContext = React.createContext({
    selectedItems: [],
    onAddItem: ()=>{},
    onRemoveItem: ()=>{}
})


export function SelectedItemsContextProvider(props) {

    const [selectedItems, setSelectedItems] = useState([])

    function addItemHandler(item) {
        setSelectedItems(prevState => ([...prevState, item]))

    }
    function removeItemHandler(id) {
        console.log(id + ' not selected')
        setSelectedItems(prevState => {
            return prevState.filter(items => items.id !== id)
        })        
    }

    return (
        <SelectedItemsContext.Provider value={
            {
            selectedItems: selectedItems,
            onAddItem: addItemHandler,
            onRemoveItem: removeItemHandler
            }
        }>
            {props.children}
        </SelectedItemsContext.Provider>
    )
}

export default SelectedItemsContext;