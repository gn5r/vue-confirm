import Vue, { PluginFunction } from "vue";
import { ExtendedVue } from "vue/types/vue";

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

/* eslint-disable @typescript-eslint/ban-types */
declare const VConfirm: ExtendedVue<
  Vue,
  {},
  {},
  {},
  {
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
  }
>;
/* eslint-enable */

export default VConfirm;

export class VConfirmPlugin {
  static install: PluginFunction<Vue>;
}
