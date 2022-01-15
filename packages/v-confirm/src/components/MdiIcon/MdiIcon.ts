import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "icon",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: "inherit",
    },
  },
  computed: {
    hasClickListener(): boolean {
      return Boolean(this.$listeners.click);
    },
  },
  methods: {
    getSize(): number {
      return Number(String(this.size).replace(/[^0-9]/g, ""));
    },
  },
  render(h): VNode {
    let iconName = "";
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (this.$slots.default) iconName = this.$slots.default[0].text!.trim();
    const fontSize = this.getSize();
    return h(
      this.hasClickListener ? "button" : "span",
      {
        attrs: {
          "area-hidden": !this.hasClickListener,
          type: this.hasClickListener ? "button" : undefined,
        },
        style: {
          width: `${fontSize}px`,
          height: `${fontSize + 12}px`,
          "background-color": "transparent",
          border: "none",
          cursor: "pointer",
          outline: "none",
          padding: 0,
          appearance: "none",
          color: this.color,
        },
        on: this.$listeners,
      },
      [
        h(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              role: "img",
              "area-hidden": true,
            },
            style: {
              "font-size": `${fontSize}px`,
              width: `${fontSize}px`,
              height: `${fontSize}px`,
              fill: "currentColor",
            },
          },
          [
            h("path", {
              attrs: { d: iconName },
            }),
          ]
        ),
      ]
    );
  },
});
