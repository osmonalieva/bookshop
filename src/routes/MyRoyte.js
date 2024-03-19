import React from "react";
import Hero from "../pages/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin/Admin";
import Detail from "../pages/Detail/Detail";
import Basket from '../pages/Basket/basket'

const MyRoyte = () => {
  const ROUTE = [
		{ path: '/', element: <Hero />, key: 1 },
		{ path: '/admin', element: <Admin />, key: 2 },
		{ path: '/detail/:id', element: <Detail />, key: 3 },
		{ path: '/basket', element: <Basket />, key: 4 },
	]
  return (
    <Routes>
      {ROUTE.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MyRoyte;
