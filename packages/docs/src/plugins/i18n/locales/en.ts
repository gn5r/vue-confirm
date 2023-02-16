export default {
  props: {
    "btn-align":
      "justify-content css property.\nAvailable options are start,center,end,space-between,space-around.",
    btns: "Action buttons",
    closeable: "show / hide flag of close icon to dialog",
    dark: "Enable dark theme",
    "hide-header": "hidden default header",
    message: "Message text",
    "model-value": "show / hide flag of dialog",
    "no-actions-divider":
      "show / hide flag of between message and action divider",
    persistent: "Clicking outside of the element not deactivate it",
    title: "Title text",
    "title-color": "Background color of header",
    "title-text-color": "Text color of header",
    width: "Component width",
  },
  events: {
    "click:outside": "Emitted when clicking outside an active dialog",
    "update:modelValue": "The updated bound model",
  },
  "copy-text": "Copy text",
  "sass-vars": "SASS Variables",
  usage: "Usage",
};
