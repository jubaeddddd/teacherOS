import {
  createBrowserRouter
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../components/home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            index:true,
            Component:HomePage
        }
    ]
  },
]);