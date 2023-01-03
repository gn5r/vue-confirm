import type { UnwrapNestedRefs } from "vue";
import {
  DefaultsInstance,
  DisplayInstance,
  ThemeInstance,
  IconOptions,
  LocaleInstance,
  RtlInstance,
} from "vuetify";

export interface Vuetify {
  defaults: DefaultsInstance;
  display: UnwrapNestedRefs<DisplayInstance>;
  theme: UnwrapNestedRefs<ThemeInstance>;
  icons: IconOptions;
  locale: UnwrapNestedRefs<LocaleInstance & RtlInstance>;
}

export type Display = UnwrapNestedRefs<DisplayInstance>;
