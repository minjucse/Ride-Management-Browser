import { ISidebarItem, ISidebarSubItem } from "@/types";

interface RouteItem {
  path: string;
  Component?: React.ComponentType;
}

export const generateRoutes = (sidebarItems: ISidebarItem[]): RouteItem[] => {
  const routes: RouteItem[] = [];

  sidebarItems.forEach((item) => {
    // Add top-level route if exists
    if (item.url && item.component) {
      routes.push({ path: item.url, Component: item.component });
    }

    // Add subitems if they exist
    if (item.items) {
      item.items.forEach((sub) => {
        if (sub.url && sub.component) {
          routes.push({ path: sub.url, Component: sub.component });
        }
      });
    }
  });

  return routes;
};
