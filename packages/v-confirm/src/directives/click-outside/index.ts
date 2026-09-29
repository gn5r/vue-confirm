import { ObjectDirective, VNode, DirectiveBinding } from "vue";

const CLICK_OUTSIDE_KEY = Symbol("v-click-outside");

interface ClickOutsideElement extends HTMLElement {
  [CLICK_OUTSIDE_KEY]?: {
    handler: (e: Event) => void;
  };
}

function handler(
  el: HTMLElement,
  binding: DirectiveBinding,
  vnode: VNode,
  e: Event
) {
  // TODO vnode.appContext is never null
  // if (!vnode.appContext) return;

  const elements = e.composedPath();
  const target = e.target as HTMLElement;
  if (elements && elements.length > 0) {
    elements.unshift(target);
  }

  if (el.contains(target)) return;
  binding.value(e);
}

const clickOutside: ObjectDirective<ClickOutsideElement> = {
  beforeMount: (el, binding, vnode) => {
    const clickHandler =
      "ontouchstart" in document.documentElement ? "touchstart" : "click";
    const listener = (e: Event) => handler(el, binding, vnode, e);
    document.addEventListener(clickHandler, listener);
    if (!el[CLICK_OUTSIDE_KEY]) {
      el[CLICK_OUTSIDE_KEY] = {
        handler: listener,
      };
    }
  },
  unmounted: (el) => {
    if (!el[CLICK_OUTSIDE_KEY]) return;
    const clickHandler =
      "ontouchstart" in document.documentElement ? "touchstart" : "click";
    const listener = el[CLICK_OUTSIDE_KEY].handler;
    document.removeEventListener(clickHandler, listener);
    delete el[CLICK_OUTSIDE_KEY];
  },
};

export default clickOutside;
