import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import Discover from "../pages/Discover/Discover";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/discover",
        element: <Discover></Discover>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
