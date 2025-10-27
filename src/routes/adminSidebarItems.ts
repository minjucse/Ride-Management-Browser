import DriverList from "@/pages/Admin/DriverList";
import UserList from "@/pages/Admin/UserList";
import { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Driver Management",
    items: [
      {
        title: "Driver List",
        url: "/admin/drivers",
        component: DriverList,
      },
      
    ],
  },
   {
    title: "User Management",
    items: [
      {
        title: "User List ",
        url: "/admin/users",
        component: UserList,
      },
      
    ],
  },
];