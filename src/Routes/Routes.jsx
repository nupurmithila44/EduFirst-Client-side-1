import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddClass from "../Pages/DeshBoard/Class/AddClass"

import DashBoard from "../Layout/DashBoard";
import AddTeachOn from "../Pages/DeshBoard/Class/AddTeachOn/AddTeachOn";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "/signIn",
            element: <SignIn></SignIn>
         },
         {
            path: "/signUp",
            element: <SignUp></SignUp>
         },
         {
            path: "/teachOn",
            element: <AddTeachOn></AddTeachOn>
         },
         {
            path: "/contactUs",
            element: <ContactUs></ContactUs>
         }

      ]
   },
   {
      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
         {
            path: 'addclass',
            element: <AddClass></AddClass>

         }
      ]
   }
]);
