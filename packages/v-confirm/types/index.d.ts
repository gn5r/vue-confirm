import { Component, Plugin } from "vue";

export type Alignment =
  | "start"
  | "center"
  | "end"
  | "space-between"
  | "space-around";

export type VConfirmBtn = {
  class?: string | string[];
  color?: string;
  /** @deprecated */
  function?: FunctionConstructor | VoidFunction;
  onClick?: FunctionConstructor | VoidFunction;
  text?: string;
  textColor?: string;
};

export type VConfirmProps = {
  btnAlign?: Alignment;
  btns?: Array<VConfirmBtn>;
  closeable?: boolean;
  dark?: boolean;
  hideHeader?: boolean;
  message?: string;
  modelValue?: boolean;
  noActionsDivider?: boolean;
  persistent?: boolean;
  title?: string;
  titleColor?: string;
  titleTextColor?: string;
  width?: string | number;
};

/* eslint-disable @typescript-eslint/ban-types */
declare const VConfirm: Component<VConfirmProps, {}, {}, {}, {}>;
/* eslint-enable */

export default VConfirm;

export const VConfirmPlugin: Plugin;

// for Volar
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    VConfirm: (typeof import("@gn5r/vue-confirm/components"))["VConfirm"];
  }
}
