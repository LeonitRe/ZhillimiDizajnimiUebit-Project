<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  data: function () {
    return {};
  },
};
</script>
<template>
  <Navbar />
  <div class="about-section">
    <h1 class="text-dark">About Us</h1>
    <p class="text-dark"><b>We are a team of Experts Development</b></p>
    <p class="text-dark">
      <b>
        We are all very different. We were born in different cities, at
        different times, we love different music, food, movies. But we have
        something that unites us all. It is our company. We are its heart. We
        are not just a team, we are a family.
      </b>
    </p>
  </div>

  <h2 style="text-align: center"><b>Our Team</b></h2>

  <div class="containers">
    <div class="column child">
      <div class="card">
        <img src="../assets/team-pictures/eduard.jpg" alt="Mike" />
        <div class="container">
          <h2>Eduard Mujota</h2>
          <p class="title">Developer</p>
          <p>...</p>
          <p>mike@example.com</p>
        </div>
      </div>
    </div>
    <div class="column child">
      <div class="card">
        <img src="../assets/team-pictures/armend.jpg" alt="Mike" />
        <div class="container">
          <h2>Armend Dullovi</h2>
          <p class="title">Developer</p>
          <p>...</p>
          <p>mike@example.com</p>
        </div>
      </div>
    </div>
    <div class="column child">
      <div class="card">
        <img src="../assets/team-pictures/lorik.jpg" alt="Mike" />
        <div class="container">
          <h2>Lorik Dullovi</h2>
          <p class="title">Developer</p>
          <p>...</p>
          <p>mike@example.com</p>
        </div>
      </div>
    </div>
    <div class="column child">
      <div class="card">
        <img src="../assets/team-pictures/leonit.jpg" alt="Mike" />
        <div class="container">
          <h2>Leonit Reqica</h2>
          <p class="title">Developer</p>
          <p>...</p>
          <p>mike@example.com</p>
        </div>
      </div>
    </div>
  </div>
  <footer class="text-center text-lg-start bg-white text-muted">
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025)">
      © 2023 Copyright:
      <a class="text-reset fw-bold" href="#">ALLEz</a>
    </div>
  </footer>
</template>

<style scoped>
.containers {
  display: flex;
  flex-wrap: wrap;
}

.child {
  flex: 50%;
}
.about-section {
  padding: 70px;
  text-align: center;
  background-color: #474e5d;
  color: white;
  background-image: url("https://thumbs.dreamstime.com/b/abstract-dna-molecules-structure-science-technology-background-illustration-vector-119136443.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.column {
  margin-bottom: 20px;
  padding: 0 30px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
}
.about-section {
  padding: 70px;
  text-align: center;
  background-color: #474e5d;
  color: white;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("https://thumbs.dreamstime.com/b/abstract-dna-molecules-structure-science-technology-background-illustration-vector-119136443.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  color: grey;
}
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
img {
  width: 60%;
  margin-left: 19%;
}
</style>
