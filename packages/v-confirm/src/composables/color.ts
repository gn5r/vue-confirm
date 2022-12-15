import { computed, isRef, ref } from "vue";
import { isCssColor } from "@/utils/colorUtil";

import type { Ref, CSSProperties, ComputedRef } from "vue";

type ColorValue = string | false | null | undefined;

export interface ComputedColor {
  colorClasses: Ref<string[]>;
  colorStyles: Ref<CSSProperties>;
}

export interface TextColor {
  textColorClasses: Ref<string[]>;
  textColorStyles: Ref<CSSProperties>;
}

export interface BackgroundColor {
  backgroundColorClasses: Ref<string[]>;
  backgroundColorStyles: Ref<CSSProperties>;
}

export function useColor(
  colors: Ref<{ background?: ColorValue; text?: ColorValue }>
): ComputedRef<ComputedColor> {
  return computed(() => {
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

    return { colorClasses: ref(classes), colorStyles: ref(styles) };
  });
}

export function useTextColor(props: Ref<ColorValue>, name?: string): TextColor {
  const colors = computed(() => ({
    text: isRef(props) ? props.value : name ? props[name] : null,
  }));
  const { colorClasses, colorStyles } = useColor(colors).value;
  return { textColorClasses: colorClasses, textColorStyles: colorStyles };
}

export function useBackgroundColor(
  props: Ref<ColorValue>,
  name?: string
): BackgroundColor {
  const colors = computed(() => ({
    background: isRef(props) ? props.value : name ? props[name] : null,
  }));
  const { colorClasses, colorStyles } = useColor(colors).value;
  return {
    backgroundColorClasses: colorClasses,
    backgroundColorStyles: colorStyles,
  };
}
