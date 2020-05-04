<template>
  <div>
    <button @click="confirm('テスト')">confirm</button>
    <button @click="error('テスト')">error</button>
    <button @click="warning('テスト')">warning</button>
    <button @click="complete('テスト')">complete</button>
    <button @click="modal('テスト')">modal</button>

    <v-confirm
      :dialog.sync="confirmObj.dialog"
      :title="confirmObj.title"
      :titleIcon="confirmObj.titleIcon"
      :titleColor="confirmObj.titleColor"
      :message="confirmObj.message"
      :buttons="confirmObj.buttons"
    />
  </div>
</template>

<script>
import VConfirm from "./components/VConfirm";
import mixin from "../lib/mixin";

export default {
  name: "App",
  mixins: [mixin],
  components: { VConfirm }
};
</script>

<style scoped>
</style>
