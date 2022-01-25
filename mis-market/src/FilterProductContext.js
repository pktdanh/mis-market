import { useState, createContext } from "react";
const FilterProductContext = createContext()


function FilterProductProvider({children}){
    const [listProduct, setListProduct] = useState([])
    const [listProductDefault, setListProductDefault] = useState([])
    const [count, setCount] = useState(0)
    const value = {
        list: listProduct,
        count: count,
        listDef: listProductDefault,
        updateListProduct: (newListProduct) => {
            setListProduct(newListProduct)
        },
        updateListProductDefault: (newListProduct) => {
            setListProductDefault(newListProduct)
        },
        updateCount: (newListProduct) => {
            console.log("update count ne")
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