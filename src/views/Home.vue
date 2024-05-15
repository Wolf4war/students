<template>
  <div>
    <section
      class="h-screen bg-white dark:bg-gradient-to-r from-slate-900 to-slate-700"
    >
      <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <h1
            class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
          >
            Welcome to Home Page
          </h1>
          <div v-if="userData" class="text-white">
            <h2 class="text-2xl">User Information:</h2>
            <p>First Name: {{ userData.FirstName }}</p>
            <p>Last Name: {{ userData.LastName }}</p>
            <p>Email: {{ userData.Email }}</p>
            <p>Phone Number: {{ userData.PhoneNumber }}</p>
          </div>
          <button
            @click="signOut"
            class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
          >
            Sign Out
          </button>
        </div>

        <div class="flex justify-center mt-10">
          <img
            class="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from "../main";
import { getAuth, signOut } from "firebase/auth";
import router from "../plugin/router";

export default {
  data() {
    return {
      userData: null,
    };
  },
  created() {
    const user = getAuth().currentUser;
    if (user) {
      this.fetchUserData(user.email); // assuming user email is used as document ID
    } else {
      router.push("/register");
    }
  },
  methods: {
    fetchUserData(email) {
      db.collection("Users")
        .doc(email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.userData = doc.data();
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    },
    signOut() {
      signOut(getAuth())
        .then(() => {
          console.log("User signed out successfully.");
          router.push("/"); // Redirect to login page
        })
        .catch((error) => {
          console.error("Sign out error:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
