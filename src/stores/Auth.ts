import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const loginView = ref(true);

  function toggleAuth() {
    loginView.value = !loginView.value;
  }
  return { loginView, toggleAuth };
});
