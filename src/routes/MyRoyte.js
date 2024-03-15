import React from "react";
import Hero from "../pages/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin/Admin";
import Kategory from "../pages/Kategory/Kategory";

const MyRoyte = () => {
  const ROUTE = [
    {path: "/",element: <Hero />,key: 1,},
    {path: "/admin",element: <Admin />,key: 2,},
  ];
  return (
    <Routes>
      {ROUTE.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MyRoyte;
