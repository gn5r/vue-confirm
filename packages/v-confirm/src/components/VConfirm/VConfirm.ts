// Vue
import Vue from "vue";

// Types
import { VNode, VNodeChildren } from "vue/types";
import { PropValidator } from "vue/types/options";
import { Alignment, VConfirmBtn } from "@gn5r/vue-confirm/types";

// CSS
import "./VConfirm.css";

// ClickOutside Directive
import { clickOutside } from "../../directives";

// Components
import { MdiIcon, Divider } from "../index";

// mdi close icon
import { mdiClose } from "@mdi/js";

// helper
import { getSize } from "../../utils/helper";
import { setTextColor, setBackgroundColor } from "../../utils/colorUtil";

export default Vue.extend({
  name: "v-confirm",
  directives: {
    clickOutside,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: Boolean,
    closeable: {
      type: Boolean,
      default: true,
    },
    persistent: Boolean,
    noActionsDivider: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: "800",
    },
    title: String,
    titleColor: {
      type: String,
      default: "inherit",
    },
    titleTextColor: {
      type: String,
      default: "inherit",
    },
    closeIconColor: {
      type: String,
      default: "inherit",
    },
    message: String,
    btnAlign: {
      type: String,
      default: "end",
    } as PropValidator<Alignment>,
    btns: {
      type: Array,
      default: () => [],
    } as PropValidator<Array<VConfirmBtn>>,
  },
  data() {
    return {
      isActive: this.value,
      animated: false,
      animateTimeout: -1,
    };
  },
  computed: {
    internalValue: {
      set(val: boolean) {
        this.isActive = val;
        this.$emit("change", val);
      },
      get(): boolean {
        return this.isActive;
      },
    },
    classes(): object {
      return {
        "v-confirm": true,
        "v-confirm--animated": this.animated,
      };
    },
  },
  methods: {
    animateClick() {
      this.animated = false;
      this.$nextTick(() => {
        this.animated = true;
        window.clearTimeout(this.animateTimeout);
        this.animateTimeout = window.setTimeout(
          () => (this.animated = false),
          200
        );
      });
    },
    closeCondition(e: Event) {
      const target = e.target as HTMLElement;
      return this.isActive && (this.$refs.dialog as Element).contains(target);
    },
    onClickOutside(e: Event): void {
      if (!this.closeCondition(e)) return;

      this.$emit("click:outside", e);
      if (this.persistent) {
        this.animateClick();
      } else {
        this.internalValue = false;
      }
    },
    genDialog(): VNode {
      return this.$createElement(
        "div",
        {
          class: this.classes,
          ref: "dialog",
          directives: [{ name: "show", value: this.isActive }],
        },
        [this.genContent()]
      );
    },
    genContent(): VNode {
      return this.$createElement(
        "div",
        {
          class: "v-confirm__content",
          style: {
            width: `${getSize(this.width)}px`,
          },
          directives: [
            {
              name: "click-outside",
              value: this.onClickOutside,
            },
          ],
        },
        [
          this.genTitlebar(),
          this.genMessage(),
          this.btns.length > 0 ? this.genActions() : null,
        ]
      );
    },
    genTitlebar(): VNode {
      const children: VNodeChildren = [];
      const headerData = {
        style: {
          "background-color": "transparent",
        },
      };
      const titlebar = this.$createElement(
        "header",
        setTextColor(this.titleTextColor, headerData),
        this.title
      );
      children.push(titlebar);

      if (this.closeable) {
        const spacer = this.$createElement("div", {
          class: "v-confirm__spacer",
        });
        const closeIcon = this.$createElement(
          "div",
          { class: "v-confirm__close-icon" },
          [
            this.$createElement(
              MdiIcon,
              {
                props: {
                  color: this.closeIconColor,
                },
                on: { click: () => (this.internalValue = false) },
              },
              [mdiClose]
            ),
          ]
        );
        children.push(spacer);
        children.push(closeIcon);
      }

      const titlebarData = {
        class: {
          "v-confirm__titlebar": true,
        },
      };
      return this.$createElement(
        "div",
        setBackgroundColor(this.titleColor, titlebarData),
        children
      );
    },
    genMessage(): VNode {
      return this.$createElement(
        "div",
        {
          class: "v-confirm__message",
        },
        this.message
      );
    },
    genActions(): VNodeChildren {
      const divider = this.$createElement(Divider, { style: { margin: "0" } });
      const btns: VNodeChildren = [];
      this.btns.forEach((btn) => {
        const button = this.genActionBtn(btn);
        btns.push(button);
      });
      const actions = this.$createElement(
        "div",
        {
          class: "v-confirm__actions",
          style: {
            "justify-content": this.btnAlign,
          },
        },
        btns
      );
      return [this.noActionsDivider ? null : divider, actions];
    },
    genActionBtn(btn: VConfirmBtn): VNode {
      const text = this.$createElement("span", btn.text || null);
      const btnData = {
        class: [btn.class ? btn.class : "button"],
        attrs: {
          type: "button",
        },
        on: {
          click: btn.function,
        },
      };
      const button = this.$createElement(
        "button",
        setBackgroundColor(
          btn.backgroundColor,
          setTextColor(btn.textColor, btnData)
        ),
        [text]
      );
      return button;
    },
  },
  watch: {
    value(val: boolean): void {
      this.isActive = val;
    },
  },
  render(h): VNode {
    return h("transition", { props: { name: "transition", appear: true } }, [
      this.genDialog(),
    ]);
  },
});
