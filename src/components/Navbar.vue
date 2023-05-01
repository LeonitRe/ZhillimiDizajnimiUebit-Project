<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarContent"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav mx-auto d-flex align-items-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-light">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/aboutus" class="nav-link text-light"
            >About Us</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/contactus" class="nav-link text-light"
            >Contact Us</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/faqview" class="nav-link text-light"
            >F.A.Q</router-link
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-light"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
            >Products</a
          >
          <div class="dropdown-menu">
            <router-link to="/computerproduct" class="dropdown-item"
              >Computers</router-link
            >
            <router-link to="/laptopproduct" class="dropdown-item"
              >Laptops</router-link
            >
            <router-link to="/phoneproduct" class="dropdown-item"
              >Phones</router-link
            >
            <router-link to="/tvproduct" class="dropdown-item">TVs</router-link>
          </div>
        </li>
        <li class="nav-item">
          <router-link to="/outlet" class="nav-link text-danger"
            >Outlets</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data: function () {
    return {};
  },
};
</script>

<style scoped>
ul {
  margin: 0;
}
li {
  margin: 0 10px;
}
.navbar-toggler {
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
}
.navbar-toggler-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-image: url("../assets/menu.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.navbar-toggler:focus,
.navbar-toggler:active:focus,
.navbar-toggler.active:focus {
  outline: 0 !important;
  box-shadow: none !important;
  border: 0 !important;
}

.navbar-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-item {
  margin-right: 1rem;
}
.nav-item.active .nav-link {
  font-weight: bold;
}
</style>
