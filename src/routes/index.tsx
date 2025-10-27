import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Homepage from "@/pages/Homepage";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import { TRole } from "@/types";
import Features from "@/pages/Features";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import { riderSidebarItems } from "./riderSidebarItems";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "features",
        Component: Features,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "faq",
        Component: FAQ,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },

    ],
  },
  {
    path: "admin",
    Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    children: [
      {
        index: true,
        element: <Navigate to="/admin/analytics" replace />,
      },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.rider as TRole),
    path: "/rider",
    children: [
      { index: true, element: <Navigate to="/rider/dashboard" /> },
      ...generateRoutes(riderSidebarItems),
    ],
  },
]);
