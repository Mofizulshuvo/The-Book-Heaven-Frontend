import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import MainLayout from "../Components/MainLayout/MainLayout";
import AllBooks from "../Pages/All Books/AllBooks";
import MyBooks from "../Pages/My Books/MyBooks";
import AddBooks from "../Pages/Add Books/AddBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/AllBooks",
        element:<AllBooks/>
      },
      { 
        path:"/MyBooks",
        element:<MyBooks></MyBooks>
      },
      {
        path:"/AddBooks",
        element:<AddBooks></AddBooks>
      },
    ],
  },
]);
