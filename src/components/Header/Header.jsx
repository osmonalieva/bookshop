import React from "react";
import { SlBasket } from "react-icons/sl";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <NavLink to="/">
            {" "}
            <h1 className="shop">BOOKShop</h1>
          </NavLink>
          <div className="content">
            <div className="inputs">
              <div className="search">
                <input
                  type="text"
                  className="search__input"
                  placeholder="Type your text"
                />
                <button className="search__button">
                  <svg
                    className="search__icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <NavLink>
              <div className="span">
                <SlBasket className="basket" />
                корзина
              </div>
            </NavLink>
            <NavLink to="/admin"> 
              <div className="person">
                <MdPerson className="admin" />
                админ
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
