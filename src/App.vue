<!-- <script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <div
    class="min-h-screen bg-gradient-to-r from-color-primary-2 to-color-primary-1 flex items-center justify-center"
  >
    <!-- inner square -->
    <div class="h-[60rem] w-3/5 bg-white rounded-[3rem] flex flex-row">
      <!-- Singn up and login functionalities -->
      <div class="auth w-1/2 flex items-center justify-center">
        <div class="form_section w-1/2 flex flex-col items-center">
          <div class="login_form w-full">
            <form action="" type="submit" class="login">
              <div class="login__user-name">
                <div class="login__user-icon">US</div>
                <input class="login__login-input" type="text" />
              </div>
              <div class="login__user-password">
                <div class="login__key-icon">KE</div>
                <input class="login__login-input" type="text" />
              </div>
              <div class="login__button_login flex justify-between">
                <div class="login__remeber-section">
                  <div class="check-box-section flex">
                    <input
                      name="RememberMe"
                      type="checkbox"
                      id="remember-me"
                      value="remember-me"
                    />
                    <p class="login__remberme-me">Remeber Me</p>
                  </div>

                  <button class="login__register-link" href="#">
                    Register
                  </button>
                </div>
                <div class="login__loginButton-section flex flex-col">
                  <button>Login</button>
                  <button class="login__register-link" href="#">
                    Forgot password
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="login_social_media">Social Media</div>
        </div>
      </div>
      <div class="image w-1/2">image</div>
      <!-- User Dash-board -->
      <!-- <div class="dash-board">dash-board</div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  background-color: orange;

  &__login-input {
    border: 2px solid red;
    height: 3.5rem;
    width: 100%;
    border-radius: 5px;
  }
}
</style>
