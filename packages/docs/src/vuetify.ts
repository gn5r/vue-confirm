import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { ja } from "vuetify/locale";

export default createVuetify({
  locale: {
    locale: "ja",
    messages: { ja },
  },
});
