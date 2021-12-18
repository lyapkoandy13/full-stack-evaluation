import HomePage from "../pages/HomePage";
import { HOME_ROUTE_PATH } from "./routesPaths";
import type { RoutePage } from "../types";

const HomeRoute: RoutePage = {
  path: HOME_ROUTE_PATH,
  element: <HomePage />,
};
export default HomeRoute;
