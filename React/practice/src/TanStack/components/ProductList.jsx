import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const retrieveProducts = async ({queryKey}) => {
    // useQuery send a obj as parameter
    const response = await axios.get(`http://localhost:3000/products?_page=${queryKey[1].page}&_per_page=5`);
    return response.data
}

const ProductList = ({onSelect}) => {

    const [page, setPage] = useState(1)

    const {data: products, error, isLoading} = useQuery({
        queryKey: ["products",{page}], // because the url is /products/?_page=1
        queryFn: retrieveProducts,
        retry: false,
        // staleTime: 5000,
        // refetchInterval: false
    })

    // stale e thaka mane, query server e listen kore ase, j kkhn data change hbe, tokhn data fetch korbe


    if(isLoading) return <div>Fetching Products</div>
    if(error) return <div>An error occured: {error.message}</div>

    return (
        <div className='flex flex-col justify-center w-3/5'>
            <h2 className='text-3xl my-2'>Product Lists</h2>

            <ul className='flex flex-wrap justify-center items-center'>
                {products.data && products.data.map(product => (
                    <li key={product.id} className='flex flex-col items-center m-2 border rounded-sm cursor-pointer' onClick={()=> onSelect(product.id)}>
                        <img src={product.thumbnail} className='object-cover rounded' />
                        <p className='text-xl my-3'>{product.title}</p>

                    </li>
                ))}
            </ul>

            <div className='flex'>

                {
                    products.prev && (
                        <button className='p-1 mx-1 bg-gray-100 border cursor-pointer' onClick={()=> setPage(products.prev)}>
                            Prev
                        </button>
                    )
                }

                {
                    products.next && (
                        <button className='p-1 mx-1 bg-gray-100 border cursor-pointer' onClick={()=> setPage(products.next)}>
                            Next
                        </button>
                    )
                }

            </div>



        </div>
    )
}

export default ProductList