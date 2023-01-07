import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { ja } from "vuetify/locale";

export default createVuetify({
  locale: {
    locale: "ja",
    messages: { ja },
  },
  theme: {
    themes: {
      light: {
        variables: {
          "medium-emphasis-opacity": 0.8,
        },
        colors: {
          primary: "#1976D2",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  },
});
