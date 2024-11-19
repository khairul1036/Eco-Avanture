import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryAdventure from "../pages/CategoryAdventure";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "./Register";
import CardDetails from "../pages/CardDetails";
import adventureData from "../../public/data.json";
import PrivateRouter from "./PrivateRouter";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    // children:[
    //     {
    //         path: "/category/:id",
    //         element: <h1>this category</h1>
    //     }
    // ]
  },
  {
    path: "/adventure/:id",
    element: (
      <PrivateRouter>
        <CardDetails></CardDetails>
      </PrivateRouter>
    ),
    loader: ({ params }) => {
      const adventure = adventureData.find(
        (item) => item.ID === parseInt(params.id)
      );
      console.log(adventure);
      return { adventure: adventure || null }; // Ensure it returns an object with a 'adventure' property
    },
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/update-profile",
        element: (
          <PrivateRouter>
            <UpdateProfile></UpdateProfile>
          </PrivateRouter>
        ),
      },
      {
        path: "/auth/user-profile",
        element: (
          <PrivateRouter>
            <UserProfile></UserProfile>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <h3>Error</h3>,
  },
]);

export default router;
