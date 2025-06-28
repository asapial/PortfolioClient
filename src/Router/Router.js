import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"projects/:id",
        Component:ProjectDetails
      }
    ]
  },
]);


export default router;