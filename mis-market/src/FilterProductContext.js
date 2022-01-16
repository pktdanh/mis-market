import { useState, createContext } from "react";
const FilterProductContext = createContext()


function FilterProductProvider({children}){
    const [listProduct, setListProduct] = useState([])
    const [count, setCount] = useState(0)
    const value = {
        list: listProduct,
        count: count,
        updateListProduct: (newListProduct) => {
            setListProduct(newListProduct)
        },
        updateCount: (newListProduct) => {
            setListProduct(newListProduct)
            setCount(count+1)
        }
    }
    return (
        <FilterProductContext.Provider value = {value}>
            {children}
        </FilterProductContext.Provider>
    )
}

export { FilterProductContext, FilterProductProvider }