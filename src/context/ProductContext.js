import axios from 'axios'
import { createContext, useContext, useState } from 'react'

const Context = createContext()
export const useMainContext = () => useContext(Context)

const ProductContext = ({ children }) => {
	const API = 'http://localhost:3000/data'

	const [product, setProduct] = useState([])

	async function addProduct(newObj) {
		await axios.post(API, newObj)
		readProduct()
	}

	async function readProduct() {
		let { data } = await axios(API)
		setProduct(data)
	}


	async function removeData(id) {
		await axios.delete(`${API}/${id}`)
	}


	const values = {
		addProduct,
		readProduct,
		product,
		removeData,
		setProduct
	}
	return <Context.Provider value={values}>{children}</Context.Provider>
}

export default ProductContext
