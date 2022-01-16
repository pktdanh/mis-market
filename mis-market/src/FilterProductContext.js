import { useState, createContext } from "react";
const FilterProductContext = createContext()

function Compare2Array(oldArr, newArr) {
    console.log("zo day r na")
    console.log("In 2 array OLD: ", oldArr)
    console.log("In 2 array NEW: ", newArr)
    if (oldArr.length !== newArr.length) return false
    for (let i = 0; i < oldArr.length; i++) {
        if (oldArr[i].maSP != newArr[i].maSP) return false 
    }

    return true
}

function FilterProductProvider({children}){
    const [listProduct, setListProduct] = useState([])
    const [count, setCount] = useState(0)
    const value = {
        list: listProduct,
        count: count,
        updateListProduct: (newListProduct) => {
            console.log("bi set lai rui ne")
            setListProduct(newListProduct)

            // if (Compare2Array(listProduct, newListProduct) === false){
            //     setListProduct(newListProduct)
            //     console.log("bi set lai rui ne")

            //     console.log("compare khac roi, dang set State")
            // }
        },
        updateCount: (newListProduct) => {
            setListProduct(newListProduct)
            setCount(count+1)
            console.log("hehehe", count)
        }
    }
    return (
        <FilterProductContext.Provider value = {value}>
            {children}
        </FilterProductContext.Provider>
    )
}

export { FilterProductContext, FilterProductProvider }