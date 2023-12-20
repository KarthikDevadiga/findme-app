<template>
  <!-- Singn up and login functionalities -->
  <!-- login Functionalities -->
  <LoginView
    class="auth w-full flex items-center justify-center text-dark-grey sm:w-1/2"
    v-if="authStore.loginView"
  ></LoginView>
  <!-- signUp functionalities -->
  <SignupView
    class="auth w-1/2 flex items-center justify-center text-dark-grey"
    v-else
  ></SignupView>

  <div class="image w-1/2 bg-map-image hidden sm:block"></div>
</template>

<script setup lang="ts">
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import { useAuthStore } from "@/stores/Auth";

const authStore = useAuthStore();
</script>
