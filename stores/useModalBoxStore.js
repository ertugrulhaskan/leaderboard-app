import { defineStore } from "pinia";

export const useModalBoxStore = defineStore("modalBox", {
  state: () => ({
    isModalVisible: false,
    title: "",
    view: null,
  }),
  actions: {
    openModal({ title, view }) {
      this.title = title;
      this.view = markRaw(view);
      this.isModalVisible = true;
    },
    closeModal() {
      this.title = "";
      this.view = null;
      this.isModalVisible = false;
    },
  },
});
