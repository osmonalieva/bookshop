import React from "react";
import Hero from "../components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import Admin from "../components/Admin/Admin";

const MyRoyte = () => {
  const ROUTE = [
    {
      path: "/",
      element: <Hero />,
      key: 1,
    },
    {
      path: "/admin",
      element: <Admin />,
      key: 1,
    },
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
