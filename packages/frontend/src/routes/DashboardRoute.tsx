import DashboardPage from "../pages/DashboardPage";
import { DASHBOARD_ROUTE_PATH } from "./routesPaths";
import type { RoutePage } from "../types";

const DashboardRoute: RoutePage = {
  path: DASHBOARD_ROUTE_PATH,
  element: <DashboardPage />,
};
export default DashboardRoute;
