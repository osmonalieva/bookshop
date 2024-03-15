import React, { useState } from "react";
import "./Admin.css";
import { useMainContext } from "../../context/ProductContext";

const Admin = () => {
  const { addProduct } = useMainContext();

  const [values, setValues] = useState({
    img: "",
    name: "",
    cat: "",
    price: "",
    descr: "",
    id : Date.now(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(values);
    setValues({
      img: "",
      name: "",
      cat: "",
      price: "",
      descr: "",
    });
  };

  return (
    <div>
      <div className="create-info">
        <div className="container">
          <div className="create">
                <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="img"
                  onChange={handleChange}
                  placeholder="Выберите файл"
                />
              </div>
              <div className="prodInfo">
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Product name..."
                />
                <div className="categor-price">
                  <select name="cat" value={values.cat} onChange={handleChange}>
                    <option value="fantasy">Фантастика</option>
                    <option value="detective">Детектив</option>
                    <option value="novels">Романы</option>
                    <option value="psychology">Психология</option>
                    <option value="history">История</option>
                    <option value="horror">Ужасы</option>
                  </select>
                  <input
                    type="text"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    placeholder="price.."
                  />
                </div>
                <textarea
                  name="descr"
                  value={values.descr}
                  onChange={handleChange}
                  placeholder="Product description..."
                  cols="30"
                  rows="10"
                ></textarea>
                <button type="submit">
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
