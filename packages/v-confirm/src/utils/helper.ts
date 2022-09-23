import { VNodeData } from "vue/types/umd";

export function getSize(size: string | number) {
  return Number(String(size).replace(/[^0-9]/g, ""));
}

export function getClass(data?: VNodeData): Array<string> {
  let arr: Array<string> = [];
  if (data) {
    if (data.staticClass) {
      arr = data.staticClass.split(/\s+/);
    }
    if (data.class) {
      if (typeof data.class === "string") {
        arr = arr.concat(data.class.split(/\s+/));
      } else if (Array.isArray(data.class)) {
        arr = arr.concat(data.class);
      } else {
        Object.keys(data.class as Record<string, boolean>)
          .filter((k) => data.class[k])
          .forEach((k) => arr.push(k));
      }
    }
  }
  return arr;
}
