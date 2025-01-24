import { routesConfig } from "@/configs/routesConfig";
import MainLayout from "@/layouts/MainLayout";
import { RouteObject } from "react-router-dom";

const Routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: routesConfig.MAIN,
  },
];

export default Routes;
