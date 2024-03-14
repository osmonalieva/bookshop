import React from "react";
import { useContext } from "../../context/ProductContext";
import { IoIosBasket } from "react-icons/io";

const Product = () => {
  const { product } = useContext();
  return (
    <div>
      {product.map((el) => (
        <div className="Book">
          <img src={el.img} alt="" />
          <div className="">
            <h5>{el.price}</h5>
            <IoIosBasket />
          </div>
          <h3>{el.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Product;
