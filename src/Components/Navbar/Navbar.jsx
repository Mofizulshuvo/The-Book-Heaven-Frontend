import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { IoBookSharp, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const { user, loading, SignOutFunction, updateUser } = useContext(AuthContext); // add updateUser
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
        setEditing(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeHandler = (isActive) =>
    isActive ? "text-black font-bold" : "text-[#32BDF0]";

  if (loading) return null;

  const handleSave = () => {
    if (updateUser) updateUser({ displayName, email });  
    setEditing(false);
  };

  return (
    <div className="bg-[#ffffffd3] shadow-xl px-6 sm:px-10 pt-4 pb-8 flex justify-between items-center relative">
      <Link to="/">
        <div className="logo text-3xl text-[#32BDF0] flex font-bold sirin-stencil-regular">
          <h1>The Book</h1>
          <h2 className="flex items-center gap-2 translate-x-[-60px] translate-y-[28px]">
            <IoBookSharp className="mt-2" />
            Heaven
          </h2>
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 text-2xl items-center py-3 text-[#32BDF0] font-bold">
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
        {user && (
          <NavLink
            to="/MyBooks"
            className={({ isActive }) => activeHandler(isActive)}
          >
            My Books
          </NavLink>
        )}
      </div>

      <div className="flex items-center gap-3">
        {user ? (
          <div className="relative" ref={dropdownRef}>
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-4">
                  {!editing ? (
                    <>
                      <h1 className="font-semibold text-gray-800">
                        {displayName}
                      </h1>
                      <p className="text-sm text-gray-500">{email}</p>
                      <div className="mt-3 flex flex-col gap-2">
                        <button
                          onClick={() => setEditing(true)}
                          className="w-full bg-gray-300 hover:bg-gray-400 text-black py-2 rounded transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={SignOutFunction}
                          className="w-full bg-[#23a8d8] hover:bg-[#055a79] text-white py-2 rounded transition"
                        >
                          Sign Out
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="w-full border rounded px-2 py-1 mb-2 text-sm"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded px-2 py-1 mb-2 text-sm"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleSave}
                          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-1 rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditing(false)}
                          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden md:flex gap-3">
            <NavLink to="/SignUp">
              <button className="bg-[#32BDF0] font-semibold px-3 py-1 rounded-[5px] text-white hover:bg-[#059dcf]">
                Sign Up
              </button>
            </NavLink>
            <NavLink to="/LogIn">
              <button className="bg-[#32BDF0] font-semibold px-3 py-1 rounded-[5px] text-white hover:bg-[#059dcf]">
                Sign In
              </button>
            </NavLink>
          </div>
        )}


        <div className="md:hidden">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-[#32BDF0] text-2xl"
          >
            {mobileMenu ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

    
      {mobileMenu && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 flex flex-col items-start px-6 py-4 gap-4 z-40">
          <NavLink
            to="/"
            className={({ isActive }) => activeHandler(isActive)}
            onClick={() => setMobileMenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/AllBooks"
            className={({ isActive }) => activeHandler(isActive)}
            onClick={() => setMobileMenu(false)}
          >
            All Books
          </NavLink>
          <NavLink
            to="/AddBooks"
            className={({ isActive }) => activeHandler(isActive)}
            onClick={() => setMobileMenu(false)}
          >
            Add Books
          </NavLink>
          {user && (
            <NavLink
              to="/MyBooks"
              className={({ isActive }) => activeHandler(isActive)}
              onClick={() => setMobileMenu(false)}
            >
              My Books
            </NavLink>
          )}
          {!user && (
            <>
              <NavLink to="/SignUp" onClick={() => setMobileMenu(false)}>
                <button className="w-full bg-[#32BDF0] font-semibold px-3 py-2 rounded text-white hover:bg-[#059dcf]">
                  Sign Up
                </button>
              </NavLink>
              <NavLink to="/LogIn" onClick={() => setMobileMenu(false)}>
                <button className="w-full bg-[#32BDF0] font-semibold px-3 py-2 rounded text-white hover:bg-[#059dcf]">
                  Sign In
                </button>
              </NavLink>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
