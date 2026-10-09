import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

const AddProduct = () => {
    const queryClient = useQueryClient()

    const [state, setState] = useState({
        title: "",
        description: "",
        price: "",
        rating: 5,
        thumbnail:""

    })

    const mutation = useMutation({
        mutationFn: (newProduct) => axios.post("http://localhost:3000/products",newProduct),
        onSuccess: (data, variables, context) => {
            console.log(context)
            queryClient.setQueryData(["random"], {value: "some random data"})
            // created a new custom cache named random and add custom data
            queryClient.invalidateQueries(["products"])
        },
        onMutate: (variables) => {
            // always calls before actual mutation
            return {
                greeting: "Hello FFT"
            }
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        const newData = {
            ...state,
            id: crypto.randomUUID().toString()
        }
        mutation.mutate(newData)
        setState({
            title: "",
            description: "",
            price: "",
            rating: 5,
            thumbnail:""
        })
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.type == "number" ? e.target.valueAsNumber : e.target.value
        setState({
            ...state,
            [name]: value
        })

    }

    if(mutation.isLoading) return <div>Submitting.....</div>
    if(mutation.isError) return <div>Error: {mutation.error.message}</div>


    return (
        <div className='m-2 p-2 bg-gray-100 w-1/5 h-1/2'>
            <h2 className="text-2xl my-2">Add a Product</h2>
            {mutation.isSuccess && <p>Product Added</p>}

            <form className="flex flex-col" onSubmit={handleSubmit}>

                <input type="text" value={state.title} name="title" onChange={handleChange} className="my-2 border p-2 rounded" placeholder="Enter a title" />

                <textarea value={state.description} name="description" onChange={handleChange} className="my-2 border p-2 rounded" placeholder="Enter a description" />

                <input type="number" value={state.price} name="price" onChange={handleChange} className="my-2 border p-2 rounded" placeholder="Enter a price" />

                <input type="text" value={state.thumbnail} name="thumbnail" onChange={handleChange} className="my-2 border p-2 rounded" placeholder="Enter a thumbnail url" />

                <button type="submit" className="m-auto text-xl p-1 rounded-md">Add Product</button>

            </form>

        </div>
    )
}

export default AddProduct