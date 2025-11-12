import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const activeHandler = (isActive) => {
    return isActive ? "text-black" : "text-[#32BDF0]";
  };
  return (
    <div className="bg-[#ffffffd3] shadow-xl px-10 py-5 flex justify-between items-center">
      <div className="logo text-3xl text-[#32BDF0] font-bold sirin-stencil-regular">
        <h1 className="text-3xl text-[#32BDF0] font-bold sirin-stencil-regular">
          The Book
        </h1>
        <h2>Heaven</h2>
      </div>
      <div className="flex gap-4 text-2xl text-[#32BDF0] font-bold  ">
        <NavLink to="/" className={({ isActive }) => activeHandler(isActive)}>
          Home
        </NavLink>
        <NavLink
          to="/AllBooks"
          className={({ isActive }) => activeHandler(isActive)}
        >
          All Books
        </NavLink>
        <NavLink
          to="/AddBooks"
          className={({ isActive }) => activeHandler(isActive)}
        >
          Add Books
        </NavLink>
        <NavLink
          to="/MyBooks"
          className={({ isActive }) => activeHandler(isActive)}
        >
          My Books
        </NavLink>
      </div>
      <div className="flex gap-3">
        <button className="bg-[#32BDF0] font-semibold px-3 py-1 rounded-[5px] text-[#ffffff] hover:bg-[#059dcf]">
          Sign Up
        </button>
        <button className="bg-[#32BDF0] font-semibold px-3 py-1 rounded-[5px] text-[#ffffff] hover:bg-[#059dcf]">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
