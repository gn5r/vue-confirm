import { VNodeData } from "vue/types/vnode";

export function isCssColor(color?: string): boolean {
  return !!color && !!color.match(/^(#|var\(--)|(transparent|inherit)/);
}

export function setBackgroundColor(
  color?: string,
  data: VNodeData = {}
): VNodeData {
  if (isCssColor(color)) {
    data.style = {
      ...(data.style as object),
      "background-color": color,
    };
  } else if (color) {
    data.class = {
      ...data.class,
      [color]: true,
    };
  }
  return data;
}

export function setTextColor(color?: string, data: VNodeData = {}): VNodeData {
  if (isCssColor(color)) {
    data.style = {
      ...(data.style as object),
      color: color,
    };
  } else if (color) {
    data.class = {
      ...data.class,
      [color]: true,
    };
  }
  return data;
}
