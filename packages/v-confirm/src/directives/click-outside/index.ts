import { DirectiveOptions, VNode } from "vue";
import { DirectiveBinding } from "vue/types/options";

function isServer(vNode: VNode): boolean {
  return (
    vNode.componentInstance !== undefined && vNode.componentInstance.$isServer
  );
}

function handler(
  el: HTMLElement,
  binding: DirectiveBinding,
  vNode: VNode,
  e: Event
) {
  if (!vNode.context) return;

  const elements = e.composedPath();
  const target = e.target as HTMLElement;
  elements && elements.length > 0 && elements.unshift(target);

  if (el.contains(target)) return;
  binding.value(e);
}

const clickOutside: DirectiveOptions = {
  bind: (el, binding, vNode) => {
    const clickHandler =
      "ontouchstart" in document.documentElement ? "touchstart" : "click";
    !isServer(vNode) &&
      document.addEventListener(clickHandler, (e) =>
        handler(el, binding, vNode, e)
      );
  },
  unbind: (el, binding, vNode) => {
    const clickHandler =
      "ontouchstart" in document.documentElement ? "touchstart" : "click";
    !isServer(vNode) &&
      document.removeEventListener(clickHandler, (e) =>
        handler(el, binding, vNode, e)
      );
  },
};

export default clickOutside;
