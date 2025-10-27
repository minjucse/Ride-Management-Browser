import DriverList from "@/pages/Admin/DriverList";
import UserList from "@/pages/Admin/UserList";
import { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const driverSidebarItems: ISidebarItem[] = [
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
      title: "Incoming Requests",
      items: [
        {
          title: "Driver List",
          url: "/admin/drivers",
          component: DriverList,
        },
        
      ],
    },
     {
      title: "Active Ride",
      items: [
        {
          title: "User List ",
          url: "/admin/users",
          component: UserList,
        },
        
      ],
    },
];