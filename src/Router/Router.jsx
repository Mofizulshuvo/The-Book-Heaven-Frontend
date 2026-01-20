import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import DashboardLayout from "../Components/DashboardLayout/DashboardLayout";
import Home from "../Pages/Home/Home";
import AllBooks from "../Pages/All Books/AllBooks";
import MyBooks from "../Pages/My Books/MyBooks";
import AddBooks from "../Pages/Add Books/AddBooks";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/LogIn/Login";
import Book_Details from "../Components/Book_Details/Book_Details";
import UpdateBook from "../Components/UpdateBook/UpdateBook";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AdminRoute from "../Components/AdminRoute/AdminRoute";
import AdminTest from "../Pages/AdminTest";
import Error from "../Components/Error";

// Dashboard Pages
import Overview from "../Pages/Dashboard/Overview";
import DashboardAllBooks from "../Pages/Dashboard/AllBooks";

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
      { path: "/admin-test", 
        element: <AdminTest /> 
      },
      {
        path:"*",
        element:<Error/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Overview />
      },
      {
        path: "my-books",
        element: <MyBooks />
      },
      {
        path: "all-books",
        element: (
          <AdminRoute>
            <DashboardAllBooks />
          </AdminRoute>
        )
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Users Management</h2>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          </AdminRoute>
        )
      },
      {
        path: "analytics",
        element: (
          <AdminRoute>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Analytics</h2>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          </AdminRoute>
        )
      }
    ]
  }
]);
