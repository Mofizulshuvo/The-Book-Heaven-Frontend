import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AllBooks from "../Pages/All Books/AllBooks";
import MyBooks from "../Pages/My Books/MyBooks";
import AddBooks from "../Pages/Add Books/AddBooks";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/LogIn/Login";
import Book_Details from "../Components/Book_Details/Book_Details";
import UpdateBook from "../Components/UpdateBook/UpdateBook";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Error from "../Components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", 
        element: <Home /> 
      }, 
      {
        path: "/AllBooks",
        element: <AllBooks />,
        loader: () => fetch("https://the-book-heaven-server-1.onrender.com/Book-data"),
      },
      {
        path: "/BookDetails/:id",
        element: (
          <PrivateRoute>
            <Book_Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/MyBooks",
        element: (
          <PrivateRoute>
            <MyBooks />
          </PrivateRoute>
        ),
      },
      { path: "/AddBooks", element: <AddBooks /> }, 
      {
        path: "/updateBook/:id",
        element: (
          <PrivateRoute>
            <UpdateBook />
          </PrivateRoute>
        ),
      },
      { path: "/SignUp", 
        element: <SignUp /> 
      },
      { path: "/LogIn", 
        element: <Login /> 
      },
      {
        path:"*",
        element:<Error/>
      }
    ],
  },
]);
