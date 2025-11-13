import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import MainLayout from "../Components/MainLayout/MainLayout";
import AllBooks from "../Pages/All Books/AllBooks";
import MyBooks from "../Pages/My Books/MyBooks";
import AddBooks from "../Pages/Add Books/AddBooks";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/LogIn/Login";
import Book_Details from "../Components/Book_Details/Book_Details";
import UpdateBook from "../Components/UpdateBook/UpdateBook";
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
        element:<AllBooks/>,
        loader:() => fetch('http://localhost:5000/Book-data'),
      },
      {
        path:"/BookDetails/:id",
        element:<Book_Details></Book_Details>
      },
      { 
        path:"/MyBooks",
        element:<MyBooks></MyBooks>
      },
      {
        path:"/AddBooks",
        element:<AddBooks></AddBooks>
      },
      {
         path:"/updateBook",
         element:<UpdateBook/>
      },
      {
        path:"/SignUp",
        element:<SignUp/>
      },
      {
        path:"/LogIn",
        element:<Login/>
      }
    ],
  },
]);
