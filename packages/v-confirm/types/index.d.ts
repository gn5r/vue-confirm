export type VConfirmBtn = {
  text?: string;
  textColor?: string;
  backgoundColor?: string;
  class?: string | string[];
  function: FunctionConstructor | VoidFunction;
};

import Vue, { VueConstructor } from "vue";

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
declare const VConfirm: ExtendedVue<
  Vue,
  {},
  {},
  {},
  {
    value: boolean;
    closeable: boolean;
    persistent: boolean;
    noActionsDivider: boolean;
    width: string | number;
    title: string;
    titleColor: Colors;
    titleTextColor: String;
    titleIcon: string;
    message: string;
    btns: Array<VConfirmBtn>;
  }
>;
