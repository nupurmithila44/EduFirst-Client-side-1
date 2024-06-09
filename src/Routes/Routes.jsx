import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddTeachOn from "../Pages/DeshBoard/Class/AddminDeshbord/AddTeachOn";
import MyClass from "../Pages/DeshBoard/Class/TeacherDeshbord/MyClass";
import SeeDetails from "../Pages/DeshBoard/Class/TeacherDeshbord/SeeDetails";
import DeshBoardLayout from "../Layout/DeshBoardLayout";
import Profile from "../Pages/DashBord/Common/Profile";
import AddClasses from "../Pages/DashBord/Techer/AddClasses";
import UpdateFile from "../Pages/DashBord/Techer/UpdateFile";
import AdminUsers from "../Pages/DashBord/Admin/AdminUsers";
import TeacherRequst from "../Pages/DashBord/Admin/TeacherRequst";
import AllClasses from "../Pages/DashBord/Admin/AllClasses";
import AllClassCard from "../Pages/DashBord/Techer/AllClassCard";



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
            path: "/tech/:id",
            element: <SeeDetails></SeeDetails>
         },
         {
            path: "/contactUs",
            element: <ContactUs></ContactUs>
         },
         {
            path: '/AllClassCard',
            element: <AllClassCard></AllClassCard>
         }

      ]
   },
   {
      path: '/dashboard',
      element: <DeshBoardLayout></DeshBoardLayout>,
      children: [
         {
            index: true,
            element: <Profile></Profile>
         },
         //Techer deshbord
         {
            path: 'addClass',
            element: <AddClasses></AddClasses>
         },
         {
            path: "myClass",
            element: <MyClass></MyClass>
         },
         {
            path: 'updateFile/:id',
            element: <UpdateFile></UpdateFile>,
            loader: ({ params }) => fetch(`http://localhost:8000/myClass/${params.id}`)
         },
        

         // Admin deshbored
         {
            path: 'allClass',
            element: <AllClasses></AllClasses>
         },
         {
            path: 'techerRequest',
            element:<TeacherRequst></TeacherRequst>
          },
         {
            path: 'adminUsers',
            element: <AdminUsers></AdminUsers>
         },
         {
            path: 'profile',
            element: <Profile></Profile>
         },
        



      ]
   }
]);
