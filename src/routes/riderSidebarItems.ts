
import UserList from "@/pages/Admin/UserList";
import RideRequest from "@/pages/Rider/RideRequest";
import { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Rider/Analytics"));


export const riderSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    url: "/rider/dashboard",
    component: Analytics,
  },
  {
    title: "Book Ride",
    items: [
      {
        title: "New Request",
        url: "/rider/new-request",
        component: RideRequest,
      },

    ],
  },
  {
    title: "Active Ride",
    items: [
      {
        title: "User List ",
        url: "/rider/users",
        component: UserList,
      },

    ],
  },

  {
    title: "Ride History",
    items: [
      {
        title: "User List ",
        url: "/rider/users",
        component: UserList,
      },

    ],
  },

];