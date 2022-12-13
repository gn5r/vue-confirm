import { ObjectDirective, VNode, DirectiveBinding } from "vue";

function handler(
  el: HTMLElement,
  binding: DirectiveBinding,
  vnode: VNode,
  e: Event
) {
  if (!vnode.appContext) return;

  const elements = e.composedPath();
  const target = e.target as HTMLElement;
  elements && elements.length > 0 && elements.unshift(target);

  if (el.contains(target)) return;
  binding.value(e);
}

const clickOutside: ObjectDirective<HTMLElement> = {
  beforeMount: (el, binding, vnode) => {
    const clickHandler =
      "ontouchstart" in document.documentElement ? "touchstart" : "click";
    document.addEventListener(clickHandler, (e) =>
      handler(el, binding, vnode, e)
    );
  },
  unmounted: (el, binding, vnode) => {
    const clickHandler =
      "ontouchstart" in document.documentElement ? "touchstart" : "click";
    document.removeEventListener(clickHandler, (e) =>
      handler(el, binding, vnode, e)
    );
  },
};

export default clickOutside;
