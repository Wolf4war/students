<template>
  <div>
    <section class="bg-white dark:bg-gradient-to-r from-slate-900 to-slate-700">
      <div class="flex justify-center min-h-screen">
        <div
          class="hidden bg-cover lg:block lg:w-2/5"
          style="
            background-image: url('https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          "
        ></div>

        <div
          class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5"
        >
          <div class="w-full">
            <h1
              class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white"
            >
              Create your students account now.
            </h1>

            <p class="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>
            <!-- Error Message -->
            <span class="text-black text-sm font-bold"> {{ errMsg }}</span>
            <form
              @submit.prevent
              class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            >
              <div>
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >First Name</label
                >
                <input
                  v-model="fname"
                  type="text"
                  placeholder="John"
                  required
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Last name</label
                >
                <input
                  v-model="lname"
                  type="text"
                  placeholder="Snow"
                  required
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Phone number</label
                >
                <input
                  v-model="phoneNumber"
                  type="text"
                  placeholder="XXX-XX-XXXX-XXX"
                  required
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Email address</label
                >
                <input
                  v-model="email"
                  type="email"
                  placeholder="johnsnow@example.com"
                  required
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Password</label
                >
                <input
                  v-model="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Confirm password</label
                >
                <input
                  v-model="confirmPassword"
                  type="password"
                  placeholder="Enter your password"
                  required
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <button
                @click="Register()"
                class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                <span>Sign Up </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </form>
            <p class="mt-6 text-sm text-center text-gray-400">
              Have an account already ?
              <a
                href="#"
                @click="goToLogin()"
                class="text-blue-500 focus:outline-none focus:underline hover:underline"
                >Sign in</a
              >.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import router from "../plugin/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../main";

export default {
  setup() {
    return {};
  },
  data() {
    return {
      fname: "",
      lname: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      onError: false,
      errMsg: "",
    };
  },
  methods: {
    Register() {
      if (
        this.fname == "" ||
        this.lname == "" ||
        this.phoneNumber == "" ||
        this.email == ""
      ) {
        this.onError = true;
        this.errMsg = "Please fill all the fields";
      } else {
        if (this.password !== this.confirmPassword) {
          alert("Passwords are not matching");
          return; // Return to prevent further execution
        }
        createUserWithEmailAndPassword(getAuth(), this.email, this.password)
          .then(() => {
            this.AddData();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    AddData: function () {
      // Add a new document in Collection(Firestore) "Users"
      db.collection("Users")
        .doc(this.email)
        .set({
          id: this.email,
          FirstName: this.fname,
          LastName: this.lname,
          Password: this.password,
          PhoneNumber: this.phoneNumber,
          Email: this.email,
        })
        .then(() => {
          console.log("Document successfully written!");
          router.push("/home");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
    goToLogin() {
      router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
