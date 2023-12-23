import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import type { IsValid } from "@/hooks/myInterfaces";

export const useAuthStore = defineStore("auth", () => {
  const loginView = ref(true);
  const formStatus: IsValid = reactive({
    valid: true,
    values: [],
  });

  function toggleAuth() {
    loginView.value = !loginView.value;
    resetformStatus();
  }
  function resetformStatus() {
    formStatus.valid = true;
    formStatus.values = [];
  }
  return { loginView, toggleAuth, formStatus, resetformStatus };
});
