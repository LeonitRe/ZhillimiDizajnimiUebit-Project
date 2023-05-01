<template>
  <div>
    <Sidebar fixed="top" />
    <router-view name="admin" />
    <head>
      <title>E-Commerce</title>
    </head>
    <body>
      <div class="container">
        <header>
          <!-- Carrotsuite navigation -->
          <nav class="carrotsuite-nav">
            <div class="logo">
              <img
                src="../../assets/images/e-commerce.png"
                class="background-img"
              />
            </div>
            <br />
            <div class="user" id="user">
              <h2>ADMIN</h2>
              <div class="user-img-wrapper">
                <img src="../../assets/images/useravatar.png" />
              </div>
            </div>
          </nav>
          <!-- end of feeds navigation -->
        </header>
        <br />
        <main class="main">
          <section class="sidebar">
            <h3>
              This panel created for admin. Here you can modify with the
              application!
            </h3>
          </section>
        </main>
      </div>
    </body>
  </div>
</template>

<script>
import Sidebar from "@/components/admin/Sidebar.vue";
export default {
  components: { Sidebar },
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.background-img {
  height: 100%;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .carrotsuite-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .user {
    margin: 1rem 0;
  }

  .user h2 {
    font-size: 1.5rem;
  }

  .user-img-wrapper img {
    width: 60px;
    height: 60px;
  }

  .sidebar {
    margin: 2rem 0;
  }

  .sidebar h3 {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sidebar {
    width: 50%;
    margin-right: 2rem;
  }

  .sidebar h3 {
    font-size: 1.8rem;
  }
}
</style>
