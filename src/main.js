import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./plugin/router";
import { firebaseConfig } from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

export const firebaseInit = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
const auth = getAuth();

const app = createApp(App).use(router).mount("#app");
