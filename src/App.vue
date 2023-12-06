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
      <div class="auth w-3/4 flex items-center justify-center">
        <div class="form_section w-1/2 flex flex-col items-center">
          <div class="login_form w-full">
            <form action="" type="submit" class="login">
              <div class="login__user-name flex items-center mx-2 mb-6">
                <div
                  class="login__user-icon p-2 bg-light-grey rounded-l-lg border border-color-light-3 h-14"
                >
                  <svg class="user-icon h-9 w-8 fill-dark-grey">
                    <use
                      xlink:href="src/assets/svg/icomoon/sprite.svg#icon-user"
                    ></use>
                  </svg>
                </div>
                <input class="login__login-input" type="text" />
              </div>
              <div class="login__user-password flex items-center mx-2 mb-6">
                <div
                  class="login__key-icon p-2 bg-light-grey rounded-l-lg border border-color-light-3 h-14"
                >
                  <svg class="key-icon h-9 w-8 fill-dark-grey">
                    <use
                      xlink:href="src/assets/svg/icomoon/sprite.svg#icon-key"
                    ></use>
                  </svg>
                </div>
                <input class="login__login-input" type="text" />
              </div>
              <div class="login__button_login flex justify-between m-2">
                <div
                  class="login__remeber-section flex flex-col justify-between items-center"
                >
                  <div class="check-box-section flex">
                    <input
                      name="RememberMe"
                      type="checkbox"
                      id="remember-me"
                      value="remember-me"
                    />
                    <p class="login__remberme-me ml-3 self-start">Remeber Me</p>
                  </div>

                  <button class="login__register-link mb-3" href="#">
                    Register Now
                  </button>
                </div>
                <div class="login__loginButton-section flex flex-col mr-2">
                  <button class="p-3.5 bg-color-blue-1 text-[#FFF] rounded-lg">
                    Login
                  </button>
                  <button class="login__register-link m-3" href="#">
                    Forgot password ?
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
// need to change the backgroud color for input field and icon
.login {
  // background-color: orange;

  &__login-input {
    border: 1px solid #d3c7c3;
    height: 3.5rem;
    width: 85%;
    border-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: #f9f5f3;
    padding-left: 1rem;

    &:focus {
      outline: none;
    }
  }
}
</style>
