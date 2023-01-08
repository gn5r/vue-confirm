import { ref } from "vue";

export interface NavigationItem {
  title?: string;
  icon?: string;
  to?: string;
}

export function useNavigation() {
  return ref<Array<NavigationItem>>([
    {
      title: "Component Demo",
      icon: "mdi-view-dashboard",
      to: "/"
    },
    {
      title: "API",
      icon: "mdi-flask-outline",
      to: "/api"
    },
    {
      title: "SASS Variables",
      icon: "mdi-palette",
      to: "/sass"
    }
  ]);
}
