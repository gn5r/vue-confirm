import { computed, isRef, reactive, toRefs, watchSyncEffect } from "vue";
import { isCssColor } from "@/utils/colorUtil";

import type { Ref, CSSProperties, ComputedGetter } from "vue";

type ColorValue = string | false | null | undefined;

export interface TextColor {
  textColorClasses: Ref<string[]>;
  textColorStyles: Ref<CSSProperties>;
}

export interface BackgroundColor {
  backgroundColorClasses: Ref<string[]>;
  backgroundColorStyles: Ref<CSSProperties>;
}

function reactiveComputed<T extends object>(getters: ComputedGetter<T>) {
  const refs = reactive({}) as T;
  const base = computed(getters);
  watchSyncEffect(() => {
    for (const key in base.value) {
      refs[key] = base.value[key];
    }
  });
  return toRefs(refs);
}

export function useColor(
  colors: Ref<{ background?: ColorValue; text?: ColorValue }>
) {
  return reactiveComputed(() => {
    const classes: string[] = [];
    const styles: CSSProperties = {};

    if (colors.value.background) {
      if (isCssColor(colors.value.background)) {
        styles.backgroundColor = colors.value.background;
      } else {
        classes.push(colors.value.background);
      }
    }

    if (colors.value.text) {
      if (isCssColor(colors.value.text)) {
        styles.color = colors.value.text;
        styles.caretColor = colors.value.text;
      } else {
        classes.push(colors.value.text);
      }
    }

    return { colorClasses: classes, colorStyles: styles };
  });
}

export function useTextColor(props: Ref<ColorValue>, name?: string): TextColor {
  const colors = computed(() => ({
    text: isRef(props) ? props.value : name ? props[name] : null,
  }));
  const { colorClasses, colorStyles } = useColor(colors);
  return { textColorClasses: colorClasses, textColorStyles: colorStyles };
}

export function useBackgroundColor(props: Ref<ColorValue>, name?: string) {
  const colors = computed(() => ({
    background: isRef(props) ? props.value : name ? props[name] : null,
  }));
  const { colorClasses, colorStyles } = useColor(colors);

  return {
    backgroundColorClasses: colorClasses,
    backgroundColorStyles: colorStyles,
  };
}
