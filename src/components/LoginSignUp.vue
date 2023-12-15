<template>
  <!-- Singn up and login functionalities -->
  <!-- login Functionalities -->
  <LoginView v-if="authStore.loginView"></LoginView>
  <!-- signUp functionalities -->
  <SignupView v-else></SignupView>

  <div class="image w-1/2 bg-map-image"></div>
</template>

<script setup lang="ts">
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import { useAuthStore } from "@/stores/Auth";

const authStore = useAuthStore();
</script>
