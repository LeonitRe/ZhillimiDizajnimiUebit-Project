<template>
  <div class="background"></div>
  <div class="d-flex align-items-center title">
    <div><h1>Phone</h1></div>
  </div>
  <section class="row section" style="background-color: #eee">
    <div class="container cont py-5 w-100">
      <div class="row wrapper box card-deck justify-content-between">
        <div
          class="col-sm-10 col-md-8 col-lg-5"
          v-for="phone in Phones"
          :key="phone._id"
        >
          <div class="card text-black testing laptopproduct">
            <p class="text-muted mb-4 pt-3">{{ phone.name }}</p>
            <span class="material-symbols-outlined"> phone_iphone </span>
            <img :src="phone.image" class="card-img-top" alt="Apple Computer" />
            <div class="card-body">
              <div class="text-center">
                <h5 class="text-muted card-title">Believing is seeing</h5>
                <p class="mb-4">{{ phone.description }}</p>
              </div>
              <div>
                <div class="d-flex justify-content-between">
                  <span>Price</span><span>${{ phone.price }}</span>
                </div>
              </div>
              <div class="container">
                <div class="row pt-4">
                  <div class="col-sm">
                    <button type="button" class="btn btn-outline-primary">
                      <span class="material-symbols-outlined">
                        shopping_cart </span
                      >Buy it Now
                    </button>
                  </div>
                  <div class="col-sm">
                    <button type="button" class="btn btn-outline-success">
                      <span class="material-symbols-outlined">
                        shopping_bag </span
                      >Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Phones: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4001/api/createphone";
    axios
      .get(apiURL)
      .then((res) => {
        this.Phones = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.section {
  width: 99.5vw;
}
.cont {
  width: 100%;
}
.container {
  width: 100%;
}
.col-sm-10 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.wrapper {
  justify-content: space-between;
}

img {
  height: 250px;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
}
.btn-outline-success,
.btn-outline-primary {
  display: flex;
}
.background {
  height: 50vh;
  background-image: url("https://wallpaperaccess.com/full/2818692.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.title {
  height: 20vh;
  color: darkred;
  text-align: center;
}
.input-group {
  margin-left: 100px;
}
.iconpc {
  font-variation-settings: "FILL" 0, "wght" 700, "GRAD" 0, "opsz" 20;
}
.border {
  border-color: white;
}
</style>
