import { computed } from "vue";
import { useI18n } from "vue-i18n";

export type PropsTableItem = {
  name?: string;
  type?: string;
  default?: string;
  description?: string;
};

export type EventsTableItem = {
  name?: string;
  type?: string;
  description?: string;
};

export type SlotsTableItem = {
  name?: string;
  type?: string;
};

export function usePropsTableItems() {
  const { t } = useI18n();
  return computed<Array<PropsTableItem>>(() => [
    {
      name: "btn-align",
      type: "'start' | 'center' | 'end' | 'space-between' | 'space-around'",
      default: "'end'",
      description: t("props.btn-align"),
    },
    {
      name: "btns",
      type: [
        "{",
        "\tclass: string | string[]",
        "\tcolor: string",
        "\tfunction: () => void",
        "\ttext: string",
        "\ttextColor: string",
        "}[]",
      ].join("\n"),
      default: "[]",
      description: t("props.btns"),
    },
    {
      name: "closeable",
      type: "boolean",
      default: "false",
      description: t("props.closeable"),
    },
    {
      name: "dark",
      type: "boolean",
      default: "false",
      description: t("props.dark"),
    },
    {
      name: "hide-header",
      type: "boolean",
      default: "false",
      description: t("props.hide-header"),
    },
    {
      name: "message",
      type: "string",
      default: "undefined",
      description: t("props.message"),
    },
    {
      name: "model-value",
      type: "boolean",
      default: "false",
      description: t("props.model-value"),
    },
    {
      name: "no-actions-divider",
      type: "boolean",
      default: "false",
      description: t("props.no-actions-divider"),
    },
    {
      name: "persistent",
      type: "boolean",
      default: "false",
      description: t("props.persistent"),
    },
    {
      name: "title",
      type: "string",
      default: "undefined",
      description: t("props.title"),
    },
    {
      name: "title-color",
      type: "string",
      default: "'inherit'",
      description: t("props.title-color"),
    },
    {
      name: "title-text-color",
      type: "string",
      default: "'inherit'",
      description: t("props.title-text-color"),
    },
    {
      name: "width",
      type: "string | number",
      default: "800",
      description: t("props.width"),
    },
  ]);
}

export function useEventsTableItems() {
  const { t } = useI18n();
  return computed<Array<EventsTableItem>>(() => [
    {
      name: "click:outside",
      type: "PointerEvent",
      description: t("events.click:outside"),
    },
    {
      name: "update:modelValue",
      type: "boolean",
      description: t("events.update:modelValue"),
    },
  ]);
}

export function useSlotsTableItems() {
  return computed<Array<SlotsTableItem>>(() => [
    {
      name: "actions",
      type: [
        "{",
        "\titems: {",
        [
          "\t\tattrs: Record<string, unknown>",
          "\t\tclass: string | string[]",
          "\t\tcolor: string",
          "\t\tfunction: () => void",
          "\t\ttext: string",
          "\t\ttextColor: string",
        ].join("\n"),
        "\t}[]",
        "}",
      ].join("\n"),
    },
    {
      name: "body",
      type: [
        "{",
        "\tattrs: Record<string, unknown>",
        "\tmessage: string",
        "}",
      ].join("\n"),
    },
    {
      name: "header",
      type: [
        "{",
        "\tattrs: Record<string, unknown>",
        "\ttitle: string",
        "}",
      ].join("\n"),
    },
  ]);
}
