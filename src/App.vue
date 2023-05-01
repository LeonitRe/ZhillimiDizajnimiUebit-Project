<template>
  <Header
    v-if="
      ![
        'login',
        'register',
        'dashboard',
        'navbaradmin',
        'slideshowadmin',
        'createproduct',
        'createcomputer',
        'editcomputer',
        'listcomputer',
        'createlaptop',
        'editlaptop',
        'listlaptop',
        'createphone',
        'editphone',
        'listphone',
        'createtv',
        'edittv',
        'listtv',
        'outlet',
        'createoutlet',
        'listoutlet',
        'editoutlet',
        'computerproduct',
        'laptopproduct',
        'phoneproduct',
        'tvproduct',
      ].includes($route.name)
    "
  />
  <Navbar
    v-if="
      ![
        'login',
        'register',
        'dashboard',
        'navbaradmin',
        'slideshowadmin',
        'createproduct',
        'contactus',
        'aboutus',
        'createcomputer',
        'editcomputer',
        'listcomputer',
        'createlaptop',
        'editlaptop',
        'listlaptop',
        'createphone',
        'editphone',
        'listphone',
        'createtv',
        'edittv',
        'listtv',
        'createoutlet',
        'listoutlet',
        'editoutlet',
      ].includes($route.name)
    "
  />

  <router-view @set-user="handleSetUser" />
</template>
<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";

import { getAuth, onAuthStateChanged } from "@firebase/auth";

export default {
  mounted() {
    this.$store.dispatch("fetchPosts");

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      this.$store.commit("setUser", user);
    });
  },
  components: {
    Header,
    Navbar,
  },
};
</script>
<style>
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
