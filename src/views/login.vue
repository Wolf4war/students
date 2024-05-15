<template>
  <div>
    <div class="bg-white dark:bg-gradient-to-r from-slate-900 to-slate-700">
      <div class="flex justify-center h-screen">
        <div
          class="hidden bg-cover lg:block lg:w-2/3"
          style="
            background-image: url('https://images.unsplash.com/photo-1578615437406-511cafe4a5c7?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          "
        >
          <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 class="text-2xl font-bold text-white sm:text-3xl">
                Wolf4War
              </h2>

              <p class="max-w-xl mt-3 text-gray-300">
                Welcome to the Student's platform.
              </p>
            </div>
          </div>
        </div>

        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div class="flex-1">
            <div class="text-center">
              <div class="flex justify-center mx-auto">
                <img
                  class="w-auto h-7 sm:h-8"
                  src="../assets/Images/wolf-logo.jpeg"
                  alt=""
                />
              </div>

              <p class="mt-3 text-gray-500 dark:text-gray-300">
                Sign in to access your account
              </p>
            </div>

            <!-- Error Message -->
            <span class="text-gray-500 dark:text-gray-300"> {{ errMsg }}</span>

            <div class="mt-8">
              <form @submit.prevent>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >Email Address</label
                  >
                  <input
                    v-model="email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    required
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="mt-6">
                  <div class="flex justify-between mb-2">
                    <label
                      for="password"
                      class="text-sm text-gray-600 dark:text-gray-200"
                      >Password</label
                    >
                    <a
                      href="#"
                      class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >Forgot password?</a
                    >
                  </div>

                  <input
                    v-model="password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    required
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="mt-6">
                  <button
                    @click="Login()"
                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p class="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?
                <a
                  href="#"
                  @click="goToRegister()"
                  class="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >Sign up</a
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../plugin/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  setup() {
    return {};
  },
  data() {
    return {
      email: "",
      password: "",
      errMsg: "",
    };
  },
  methods: {
    Login: function () {
      if (this.email == "" || this.password == "") {
        this.errMsg = "Please fill all the fields";
        this.onError = true;
      } else {
        signInWithEmailAndPassword(getAuth(), this.email, this.password)
          .then((data) => {
            console.log("Successfully logged in!");
            router.push("/home");
          })
          .catch((error) => {
            this.onError = true;
            console.log(error.code);
            switch (error.code) {
              case "auth/invalid-email":
                this.errMsg = "Invalid email";
                break;
              case "auth/user-not-found":
                this.errMsg = "No account under that email was found";
                break;
              case "auth/wrong-password":
                this.errMsg = "Incorrect password";
                break;
              case "auth/invalid-email":
                this.errMsg = "Invalid email";
                break;
              default:
                this.errMsg = "Email or password was incorrect";
                break;
            }
          });
      }
    },

    goToRegister() {
      router.push("/register");
    },
  },
};
</script>

<style lang="scss" scoped></style>
