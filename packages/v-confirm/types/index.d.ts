import Vue, { VueConstructor, PluginFunction } from "vue";

export type Alignment =
  | "start"
  | "center"
  | "end"
  | "space-between"
  | "space-around";

export type VConfirmBtn = {
  text?: string;
  textColor?: string;
  backgroundColor?: string;
  class?: string | string[];
  function: FunctionConstructor | VoidFunction;
};

type CombinedVueInstance<
  Instance extends Vue,
  Data,
  Methods,
  Computed,
  Props
> = Data & Methods & Computed & Props & Instance;

type ExtendedVue<
  Instance extends Vue,
  Data,
  Methods,
  Computed,
  Props
> = VueConstructor<
  CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
>;

/* eslint-disable @typescript-eslint/ban-types */
const VConfirm: ExtendedVue<
  Vue,
  {},
  {},
  {},
  {
    value: boolean;
    closeable: boolean;
    persistent: boolean;
    noActionsDivider: boolean;
    width: string;
    title: string;
    titleColor: Colors;
    titleTextColor: String;
    closeIconColor: string;
    message: string;
    btns: Array<VConfirmBtn>;
  }
>;

export default VConfirm;

export class VConfirmPlugin {
  static install: PluginFunction;
}
