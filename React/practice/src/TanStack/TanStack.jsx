import ProductList from "./components/ProductList"
import ProductDetails from "./components/ProductDetails"
import AddProduct from "./components/AddProduct"
import { useState } from "react"

const TanStack = () => {
    const [selectedId, setSeletedId] = useState(1)

    return (
        <div className="flex m-2">
            <AddProduct />
            <ProductList onSelect={setSeletedId} />
            <ProductDetails id={selectedId}/>
        </div>
    )
}

export default TanStack