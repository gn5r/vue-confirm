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

type Props = {
  btnAlign?: Alignment;
  btns?: Array<VConfirmBtn>;
  closeable?: boolean;
  closeIconColor?: string;
  dark?: boolean;
  message?: string;
  noActionsDivider?: boolean;
  hideHeader?: boolean;
  persistent?: boolean;
  title?: string;
  titleColor?: string;
  titleTextColor?: string;
  value?: boolean;
  width?: string | number;
};

/* eslint-disable @typescript-eslint/ban-types */
declare const VConfirm: Component<Props, {}, {}, {}, {}>;
/* eslint-enable */

export default VConfirm;

export const VConfirmPlugin: Plugin;
