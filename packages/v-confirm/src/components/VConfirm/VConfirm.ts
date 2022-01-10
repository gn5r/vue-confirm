// Vue
import Vue from "vue";

// Types
import { VNode, VNodeChildren } from "vue/types";
import { PropValidator } from "vue/types/options";
import { VConfirmBtn } from "@gn5r/vue-confirm/types";

// CSS
import "./VConfirm.css";

// ClickOutside Directive
import ClickOutside from "vue-click-outside";

// Components
import { MdiIcon, Divider } from "../index";

// mdi close icon
import { mdiClose } from "@mdi/js";

export default Vue.extend({
  name: "v-confirm",
  directives: {
    ClickOutside,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: Boolean,
    closeable: Boolean,
    persistent: Boolean,
    noActionsDivider: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "800px",
    },
    title: String,
    titleColor: {
      type: String,
      default: "",
    },
    titleTextColor: {
      type: String,
      default: "inherit",
    },
    message: String,
    btns: {
      type: Array,
      default: () => [],
    } as PropValidator<Array<VConfirmBtn>>,
  },
  data() {
    return {
      isActive: this.value,
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
  },
  methods: {
    closeCondition(e: Event) {
      const target = e.target as HTMLElement;
      return !this.isActive || (this.$refs.dialog as Element).contains(target);
    },
    onClickOutside(e: Event): void {
      if (!this.closeCondition(e)) return;

      this.$emit("click:outside", e);
      if (this.persistent) {
        //
      } else {
        this.internalValue = false;
      }
    },
    genDialog(): VNode {
      return this.$createElement(
        "div",
        {
          class: "v-confirm",
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
            width: this.width,
            "max-width": this.width,
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
          this.genText(),
          this.btns.length > 0 ? this.genActions() : null,
        ]
      );
    },
    genTitlebar(): VNode {
      const children: VNodeChildren = [];
      const titlebar = this.$createElement(
        "header",
        {
          class: "v-confirm__titlebar-text",
          style: {
            color: this.titleTextColor,
          },
        },
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
                on: { click: () => (this.internalValue = false) },
              },
              [mdiClose]
            ),
          ]
        );
        children.push(spacer);
        children.push(closeIcon);
      }

      return this.$createElement(
        "div",
        {
          class: "v-confirm__titlebar",
          style: {
            "background-color": this.titleColor,
          },
        },
        children
      );
    },
    genText(): VNode {
      return this.$createElement(
        "div",
        { class: "v-confirm__text" },
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
        },
        btns
      );
      return [this.noActionsDivider ? null : divider, actions];
    },
    genActionBtn(btn: VConfirmBtn): VNode {
      const text = this.$createElement("span", btn.text || null);
      const button = this.$createElement(
        "button",
        {
          class: btn.class || "button",
          attrs: {
            type: "button",
          },
          style: {
            color: btn.textColor || null,
            "background-color": btn.backgoundColor || null,
          },
          on: {
            click: btn.function,
          },
        },
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
    console.debug("v-confirm render");
    return h("transition", { props: { name: "transition", appear: true } }, [
      this.genDialog(),
    ]);
  },
});
