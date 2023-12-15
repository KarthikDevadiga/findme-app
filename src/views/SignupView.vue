<template>
  <div class="auth w-1/2 flex items-center justify-center text-dark-grey">
    <div class="form_section w-1/2 flex flex-col items-center">
      <div class="siginIn_form w-full">
        <form action="" type="submit" class="siginIn">
          <!-- user-name -->
          <div class="siginIn__user-name flex items-center mx-2 mb-6">
            <div
              class="siginIn__user-icon p-2 bg-transparent rounded-l-lg border border-color-light-3 h-14"
            >
              <svg class="user-icon h-9 w-8 fill-dark-grey">
                <use
                  xlink:href="src/assets/svg/icomoon/sprite.svg#icon-user"
                ></use>
              </svg>
            </div>
            <input
              class="siginIn__siginIn-input"
              type="text"
              placeholder="User Name"
            />
          </div>
          <!-- email -->
          <div class="siginIn__user-password flex items-center mx-2 mb-6">
            <div
              class="siginIn__key-icon p-2 bg-transparent rounded-l-lg border border-color-light-3 h-14"
            >
              <svg class="key-icon h-9 w-8 fill-dark-grey">
                <use
                  xlink:href="src/assets/svg/icomoon/sprite.svg#icon-key"
                ></use>
              </svg>
            </div>
            <input
              class="siginIn__siginIn-input"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <!-- password -->
          <div class="siginIn__user-password flex items-center mx-2 mb-6">
            <div
              class="siginIn__key-icon p-2 bg-transparent rounded-l-lg border border-color-light-3 h-14"
            >
              <svg class="key-icon h-9 w-8 fill-dark-grey">
                <use
                  xlink:href="src/assets/svg/icomoon/sprite.svg#icon-key"
                ></use>
              </svg>
            </div>
            <input
              class="siginIn__siginIn-input"
              type="password"
              placeholder="Password"
            />
          </div>
          <!-- re-password -->
          <div class="siginIn__user-password flex items-center mx-2 mb-6">
            <div
              class="siginIn__key-icon p-2 bg-transparent rounded-l-lg border border-color-light-3 h-14"
            >
              <svg class="key-icon h-9 w-8 fill-dark-grey">
                <use
                  xlink:href="src/assets/svg/icomoon/sprite.svg#icon-key"
                ></use>
              </svg>
            </div>
            <input
              class="siginIn__siginIn-input"
              type="password"
              placeholder="Re-Enter Password"
            />
          </div>

          <div class="siginIn__button_siginIn flex justify-between m-2">
            <div
              class="siginIn__remeber-section flex flex-col justify-between items-center"
            >
              <button
                class="siginIn__register-link mb-3 text-blue-500"
                @click.prevent="authStore.toggleAuth()"
              >
                Login
              </button>
            </div>
            <div class="siginIn__siginInButton-section flex flex-col mr-2">
              <button class="p-3.5 bg-color-blue-1 text-[#FFF] rounded-lg">
                siginIn
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/Auth";

const authStore = useAuthStore();
</script>

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
    // background-color: #f9f5f3;
    background-color: transparent;
    padding-left: 1rem;

    &:focus {
      outline: none;
    }
  }
}

.siginIn {
  // background-color: orange;

  &__siginIn-input {
    border: 1px solid #d3c7c3;
    height: 3.5rem;
    width: 85%;
    border-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    // background-color: #f9f5f3;
    background-color: transparent;
    padding-left: 1rem;

    &:focus {
      outline: none;
    }
  }
}

.social_button {
  width: 85%;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #fff;
}

.or-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.or-line {
  flex: 1;
  border: 0;
  border-top: 1px solid #d3c7c3; /* Adjust the color as needed */
}

.or-text {
  padding: 0 10px; /* Adjust padding as needed */
  color: #000; /* Adjust the color as needed */
}
</style>
