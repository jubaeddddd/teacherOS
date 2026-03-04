import {
  createBrowserRouter
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Schedule from "../pages/schedule/Schedule";
import Counseling from "../pages/Counseling/Counseling";
import QuizLab from "../pages/quizLab/QuizLab";
import Resources from "../pages/resources/Resources";
import Dashboard from "../pages/dashboard/Dashboard";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        Component: Dashboard
      },
      {
        path: '/schedule',
        Component: Schedule
      },
      {
        path: '/counseling',
        Component: Counseling
      }
      ,
      {
        path: '/quizLab',
        Component: QuizLab
      },
      {
        path: '/resources',
        Component: Resources
      }
    ]
  },
]);