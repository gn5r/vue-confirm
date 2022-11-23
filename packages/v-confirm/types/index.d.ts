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
    value?: boolean;
    closeable?: boolean;
    persistent?: boolean;
    noActionsDivider?: boolean;
    dark?: boolean;
    width?: string | number;
    title?: string;
    titleColor?: string;
    titleTextColor?: string;
    closeIconColor?: string;
    message?: string;
    btnAlign?: Alignment;
    btns?: Array<VConfirmBtn>;
  }
>;
/* eslint-enable */

export default VConfirm;

export class VConfirmPlugin {
  static install: PluginFunction<Vue>;
}
