<script>
import logo from "@/assets/logo.jpg";

import { getAuth, signOut } from "firebase/auth";
import { mapGetters, mapState } from "vuex";
export default {
  data: function () {
    return {
      logo: logo,
      currentUserEmail: null,
    };
  },
  methods: {
    async handleLogout() {
      const auth = getAuth();
      await signOut(auth);
    },
  },

  computed: {
    // user: this.$store.state.user,
    ...mapState(["user"]),
    // username: this.state.getters.username,
    ...mapGetters(["username"]),
  },
};
</script>

<template>
  <div
    class="title-container bg-dark loginview d-flex justify-content-between align-items-center"
  >
    <div class="first">
      <img :src="logo" class="logo" />
      <h3 class="name"><strong>ALLEz </strong></h3>
    </div>
    <div>
      <div class="d-flex">
        <div v-if="user" class="controlls second-item">
          <router-link
            to=""
            @click.prevent="handleLogout"
            class="btn btn-outline-danger logout-btn"
            >Logout</router-link
          >
          <router-link
            v-if="$store.getters.isAdmin"
            to="/dashboard"
            class="btn btn-outline-primary"
            >Admin</router-link
          >
        </div>
        <div v-else class="user controlls second-item">
          <router-link to="/login" class="btn btn-outline-primary"
            >Login</router-link
          >
          <router-link to="/register" class="btn btn-outline-light"
            >Register</router-link
          >
          <router-link
            to="/dashboard"
            hidden
            class="btn btn-outline-primary admin"
            >Admin</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div class="nav-container d-flex justify-content-between">
    <div class="second">
      <input type="text" class="search bg-dark" placeholder="Search" />
    </div>
    <div class="d-flex align-items-center">
      <div v-if="user" class="dropdown third">
        <button
          class="btn-dark dropdown-toggle button btn buttonuser"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ username }}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">Basket Products</button>
          <button class="dropdown-item" type="button">Purchases</button>
          <button class="dropdown-item" type="button">Reback Products</button>
        </div>
      </div>
      <div v-else class="dropdown third">
        <button
          class="btn-dark dropdown-toggle button btn buttonuser"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          User Name
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">User Details</button>
          <button class="dropdown-item" type="button">Purchases</button>
          <button class="dropdown-item" type="button">Reback Products</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logout-btn {
  margin-right: 5px;
}
.title-container {
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
}
.user {
  display: flex;
  gap: 0.3rem;
}
.logo {
  height: 50px;
  width: 70px;
  margin-left: 30px;
}
.nav-container {
  display: flex;
  background-color: rgb(15, 15, 15);
  height: 5rem;
  border: 1px solid black;
  justify-content: space-between;
}

.search {
  border-style: none;
  padding-left: 10px;
  height: 3rem;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  color: rgb(180, 180, 180);
  margin-top: 15px;
  width: 20rem;
}
.search:focus {
  outline: none;
}
.search::placeholder {
  color: rgb(180, 180, 180);
}
.button {
  background-color: rgb(15, 15, 15);
  color: white;
  border: 0px;
  height: 100%;
  margin-right: 100px;
  outline: none;
  border-radius: 0.2rem;
}

.first {
  display: flex;
  justify-content: center;
  align-items: center;
}
.name {
  margin-top: 1rem;
  margin-left: 0.5rem;
  font-size: 2rem;
  color: darkred;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: 0 !important;
  box-shadow: none !important;
  background-color: rgb(15, 15, 15) !important;
}
.buttonuser:hover {
  background-color: rgb(15, 15, 15);
}

.second-item {
  margin-right: 7rem;
}
.welcome {
  margin-right: 1050px;
  margin-top: 12px;
}
.search {
  margin-left: 340px;
}
</style>
