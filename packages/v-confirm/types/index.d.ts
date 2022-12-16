import { Component, Plugin } from "vue";

export type Alignment =
  | "start"
  | "center"
  | "end"
  | "space-between"
  | "space-around";

export type VConfirmBtn = {
  text?: string;
  textColor?: string;
  color?: string;
  class?: string | string[];
  function: FunctionConstructor | VoidFunction;
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
