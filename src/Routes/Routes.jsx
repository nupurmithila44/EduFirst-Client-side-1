import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "/signIn",
            element:<SignIn></SignIn>
         },
         {
            path: "/signUp",
            element: <SignUp></SignUp>
         }
      ]
    },
  ]);
