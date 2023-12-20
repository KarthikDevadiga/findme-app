<!-- <script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <div
    class="sm:min-h-screen h-screen bg-gradient-to-r from-color-primary-2 to-color-primary-1 flex items-center justify-center"
  >
    <!-- inner square -->
    <div
      class="h-screen w-screen bg-white rounded-[3rem] flex flex-row sm:w-screen md:w-3/5 sm:h-[60rem]"
    >
      <LoginSignUp></LoginSignUp>

      <!-- User Dash-board -->

      <!-- <div class="dash-board">dash-board</div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginSignUp from "./components/LoginSignUp.vue";
</script>
