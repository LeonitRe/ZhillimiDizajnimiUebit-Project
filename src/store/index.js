import db from "@/firebase/db";
import signupUser from "@/firebase/user/signupUser";
import auth from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { createStore } from "vuex";
import loginUser from "../firebase/user/loginUser";

const store = createStore({
  state: {
    user: null,
    posts: [],
    categories: [],
  },
  getters: {
    username(state) {
      if (!state.user) return "";
      return state.user.displayName;
    },
    isAdmin(state) {
      if (!state.user) return false;
      return state.user.email === "lr52949@ubt-uni.net";
    },
    numberOfPosts(state) {
      return state.posts.length;
    },
    titlesOfPosts(state) {
      const titles = state.posts.map((post) => post.title);
      return titles;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    addCategory(state, category) {
      state.categories.push(category);
    },
  },
  actions: {
    async loginUser({ commit }, payload) {
      const user = await loginUser(payload);
      commit("setUser", user);
    },
    // eslint-disable-next-line no-unused-vars
    async registerUser({ commit }, payload) {
      signupUser(payload);
    },
    async logoutUser({ commit }) {
      // Logout user and clear user state
      await auth.signOut();
      commit("setUser", null);
    },
    async fetchPosts({ commit }) {
      try {
        const snapshots = await getDocs(collection(db, "posts"));
        const posts = [];
        snapshots.forEach((snapshot) => {
          posts.push(snapshot.data());
        });
        commit("setPosts", posts);
      } catch (err) {
        console.log("err -", err);
      }
    },
    async fetchCategories({ commit }) {
      const res = await fetch("http://localhost:3000/categories");
      const categories = await res.json();
      commit("setCategories", categories);
    },
    async createCategory({ commit }, categoryData) {
      const res = await fetch("http://localhost:3000/categories", {
        method: "post",
        body: JSON.stringify(categoryData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const newCategory = await res.json();

      commit("addCategory", newCategory);
    },
  },
  modules: {},
});

export default store;
