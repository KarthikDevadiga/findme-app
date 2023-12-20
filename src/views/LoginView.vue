<template>
  <div>
    <div
      class="form_section w-full sm:w-1/2 flex flex-col items-center md:w-3/4"
    >
      <!-- Dialog box goes here -->
      <dialog-box
        class="self-start m-2 text-red-400"
        v-show="!dialog"
        :dialogMessage="errorMessages"
      ></dialog-box>
      <div class="login_form w-full">
        <form action="" type="submit" class="login">
          <!-- user-name -->
          <div class="login__user-name flex items-center mx-2 mb-6">
            <div
              class="login__user-icon p-2 bg-transparent rounded-l-lg border border-color-light-3 h-14"
            >
              <svg class="user-icon h-9 w-8 fill-dark-grey">
                <use
                  xlink:href="@/assets/svg/icomoon/sprite.svg#icon-user"
                ></use>
              </svg>
            </div>
            <input
              v-model="userInfo.userName"
              class="login__login-input"
              type="text"
            />
          </div>
          <!-- user-password -->
          <div class="login__user-password flex items-center mx-2 mb-6">
            <div
              class="login__key-icon p-2 bg-transparent rounded-l-lg border border-color-light-3 h-14"
            >
              <svg class="key-icon h-9 w-8 fill-dark-grey">
                <use
                  xlink:href="@/assets/svg/icomoon/sprite.svg#icon-key"
                ></use>
              </svg>
            </div>
            <input
              v-model="userInfo.userPassword"
              class="login__login-input"
              type="text"
            />
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
                <p class="login__remberme-me mx-3 self-start">Remeber Me</p>
              </div>

              <button
                type="button"
                class="login__register-link mb-3 text-blue-500"
                @click.prevent="authStore.toggleAuth()"
              >
                Register Now
              </button>
            </div>
            <div class="login__loginButton-section flex flex-col mr-2">
              <button
                type="submit"
                class="p-3.5 bg-color-blue-1 text-[#FFF] rounded-lg active:bg-color-blue-2"
                @click.prevent="userLogin()"
              >
                Login
              </button>
              <button type="button" class="login__register-link m-3" href="#">
                Forgot password ?
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="or-container mb-7 w-full p-3">
        <hr class="or-line" />
        <span class="or-text">or</span>
        <hr class="or-line" />
      </div>

      <div class="login_social_media w-full">
        <div class="social_buttons w-full">
          <div class="facbook_section flex mb-7">
            <div
              class="login__key-icon p-2 rounded-l-lg border border-color-light-3 h-14 bg-facebook-1"
            >
              <svg class="key-icon h-9 w-8 fill-white">
                <use
                  xlink:href="@/assets/svg/icomoon/sprite.svg#icon-facebook"
                ></use>
              </svg>
            </div>
            <button class="social_button bg-facebook">
              Login with Facebook
            </button>
          </div>
          <div class="facbook_section flex mb-7">
            <div
              class="login__key-icon p-2 bg-pinterest-1 rounded-l-lg border border-color-light-3 h-14"
            >
              <svg class="key-icon h-9 w-8 fill-white">
                <use
                  xlink:href="@/assets/svg/icomoon/sprite.svg#icon-pinterest-with-circle"
                ></use>
              </svg>
            </div>
            <button class="social_button bg-pinterest">
              Login with pinterest
            </button>
          </div>
          <div class="facbook_section flex">
            <div
              class="login__key-icon p-2 bg-linkdin-1 rounded-l-lg border border-color-light-3 h-14"
            >
              <svg class="key-icon h-9 w-8 fill-white">
                <use
                  xlink:href="@/assets/svg/icomoon/sprite.svg#icon-linkedin-with-circle"
                ></use>
              </svg>
            </div>
            <button class="social_button bg-linkdin">
              Login with LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/Auth";
import { reactive, ref } from "vue";
import type { Ref } from "vue";
import { myFormValidation } from "../hooks/myFormValidation";
import DialogBox from "@/components/DialogBox.vue";
import type { IsValid } from "@/hooks/myInterfaces";

interface User {
  userName: string;
  userPassword: string;
}

const authStore = useAuthStore();
const userInfo: User = reactive({
  userName: "",
  userPassword: "",
});
let errorMessages: string[];
const dialog: Ref<boolean> = ref(true);

function userLogin() {
  checkIsEmpty();
  charNumber();
  //cheking if there is any errors
  if (errorMessages.length === 0) {
    console.log(userInfo);
  }
}

function checkIsEmpty() {
  dialog.value = true;
  const result: IsValid = myFormValidation().isEmpty(userInfo);
  errorMessages = Array.isArray(result.values) ? [...result.values] : [];
  dialog.value = result.valid;
}

function charNumber() {
  // to check number of charecters
  const passwordObj = { userPassword: userInfo.userPassword }; // destructuring taking only userpassword from userInfo.
  const result: IsValid = myFormValidation().minChar(8, passwordObj);
  if (dialog.value) dialog.value = result.valid;
  result.values?.forEach((ele) => {
    errorMessages.push(ele);
  });
}
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
@/hooks/myHelperFunctions ../hooks/myFormValidation
