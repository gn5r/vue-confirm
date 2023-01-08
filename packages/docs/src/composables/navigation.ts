import { ref } from "vue";

export interface NavigationItem {
  title?: string;
  inactiveIcon?: string,
  activeIcon?: string;
  to?: string;
}

export function useNavigation() {
  return ref<Array<NavigationItem>>([
    {
      title: "Component Demo",
      inactiveIcon: "mdi-view-dashboard-outline",
      activeIcon: "mdi-view-dashboard",
      to: "/"
    },
    {
      title: "API",
      inactiveIcon: "mdi-api",
      activeIcon: "mdi-api",
      to: "/api"
    },
    {
      title: "SASS Variables",
      inactiveIcon: "mdi-palette-outline",
      activeIcon: "mdi-palette",
      to: "/sass"
    }
  ]);
}
