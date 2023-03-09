import React from "react";
import { useState } from "react";

const ActiveContext = React.createContext({
    category: '',
    onChangeCategory: () => {},
})

const ActiveContextProvider = (props) => {
    const [activeCategory, setActiveCategory] = useState('Home')

    const changeCategoryHandler = (category) => {
        setActiveCategory(category);
        console.log('context function')
    }

    return <ActiveContext.Provider value={
        {
            category: activeCategory,
            onChangeCategory: changeCategoryHandler,
        }
    }>
        {props.children}
    </ActiveContext.Provider>
}






export default ActiveContext;