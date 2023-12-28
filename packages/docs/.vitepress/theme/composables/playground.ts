import { computed } from "vue";
import { useI18n } from "vue-i18n";

type PlaygroundTitle =
  | "componentOptions"
  | "titleOptions"
  | "messageOptions"
  | "actionButtons"
  | "showDialog";

export type Title = {
  [key in PlaygroundTitle]: string | undefined;
};

export function usePlaygroundTitles() {
  const { t } = useI18n();
  return computed<Title>(() => ({
    componentOptions: t("playground.component-options"),
    titleOptions: t("playground.title-options"),
    messageOptions: t("playground.message-options"),
    actionButtons: t("playground.action-buttons"),
    showDialog: t("playground.show-dialog"),
  }));
}
