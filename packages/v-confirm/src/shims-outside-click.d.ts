declare module "vue-click-outside" {
  import { DirectiveFunction } from "vue/types/options";
  interface ClickOutside {
    bind: DirectiveFunction;
    update: DirectiveFunction;
    unbind: DirectiveFunction;
  }
  const clickOutside: ClickOutside;
  export default clickOutside;
}
