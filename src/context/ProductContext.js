import axios from "axios";
import React, {
  createContext,
  useContext as useReactContext,
  useState,
} from "react";

const Context = createContext();
export const useContext = () => useReactContext(Context);

const ProductContext = ({ children }) => {
  const API = "http://localhost:3000/data";

  const [product, setProduct] = useState([]);

  async function addProduct(newObj) {
    await axios.post(API, newObj);
    readProduct();
  }

  async function readProduct() {
    let response = await axios.get(API);
    setProduct(response.data);
  }

  const values = {
    addProduct,
    readProduct,
    product,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ProductContext;
