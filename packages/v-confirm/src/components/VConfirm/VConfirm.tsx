// Vue
import { defineComponent, ref, computed, nextTick, watch } from "vue";
import { Transition } from "vue";

// Types
import type { PropType } from "vue";
import type { Alignment, VConfirmBtn } from "@gn5r/vue-confirm/types";

// ClickOutside Directive
import { clickOutside } from "@/directives";

// Components
import { VConfirmHeader, VConfirmActions } from "@/components/VConfirm";
import { Divider } from "@/components";

// Helper
import { convertToUnit } from "@/utils/helper";
import { useThemeProps, useThemeClasses } from "@/composables/theme";

import "./VConfirm.scss";

export const VConfirm = defineComponent({
  name: "v-confirm",
  directives: {
    clickOutside,
  },
  props: {
    modelValue: Boolean,
    closeable: Boolean,
    persistent: Boolean,
    noActionsDivider: Boolean,
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
    message: String,
    btnAlign: {
      type: String as PropType<Alignment>,
      default: "end",
    },
    btns: {
      type: Array as PropType<Array<VConfirmBtn>>,
      default: () => [],
    },
    hideHeader: Boolean,
    ...useThemeProps(),
  },
  emits: ["click:outside", "update:modelValue"],
  setup(props, { emit, attrs }) {
    const dialog = ref<HTMLElement>();
    const isActive = ref(props.modelValue);
    const animated = ref(false);
    const animateTimeout = ref(-1);

    const internalValue = computed({
      set: (val: boolean) => {
        isActive.value = val;
        emit("update:modelValue", val);
      },
      get: () => isActive.value,
    });
    const classes = computed(() => ({
      "v-confirm--animated": animated.value,
    }));
    const themeClasses = useThemeClasses(props);

    watch(
      () => props.modelValue,
      (val) => (isActive.value = val)
    );

    function animateClick() {
      animated.value = false;
      nextTick(() => {
        animated.value = true;
        window.clearTimeout(animateTimeout.value);
        animateTimeout.value = window.setTimeout(
          () => (animated.value = false),
          200
        );
      });
    }

    function closeCondition(e: Event) {
      const target = e.target as HTMLElement;
      return isActive.value && dialog.value?.contains(target);
    }

    function onClickOutside(e: Event) {
      if (!closeCondition(e)) return;
      emit("click:outside", e);
      if (props.persistent) animateClick();
      else internalValue.value = false;
    }

    return () => (
      <Transition name="transition" appear>
        <div
          v-show={isActive.value}
          ref={dialog}
          class={["v-confirm", classes.value, themeClasses.value]}
          {...attrs}
        >
          <div
            class="v-confirm__content"
            v-click-outside={onClickOutside}
            style={{ width: convertToUnit(props.width) }}
          >
            {props.hideHeader ? null : (
              <VConfirmHeader
                dark={props.dark}
                color={props.titleColor}
                textColor={props.titleTextColor}
                closeable={props.closeable}
                onClick={() => {
                  internalValue.value = false;
                }}
              >
                {props.title}
              </VConfirmHeader>
            )}
            <div class="v-confirm__message">{props.message}</div>
            {props.btns.length > 0 && !props.noActionsDivider && (
              <Divider dark={props.dark} style="margin: 0" />
            )}
            {props.btns.length > 0 && (
              <VConfirmActions btn-align={props.btnAlign} btns={props.btns} />
            )}
          </div>
        </div>
      </Transition>
    );
  },
});

export type VConfirm = InstanceType<typeof VConfirm>;
