<template>
  <Sidebar />
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update Laptop</h3>
      <span class="material-symbols-outlined"> update </span>
      <br />
      <form @submit.prevent="handleUpdateForm">
        <br />
        <div class="form-group">
          <label><b>Name</b></label>
          <input
            type="text"
            class="form-control"
            v-model="laptop.name"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label><b>Description</b></label>
          <input
            placeholder="Computer Description"
            type="text"
            class="form-control"
            v-model="laptop.description"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label><b>Price</b></label>
          <input
            type="text"
            class="form-control"
            v-model="laptop.price"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label><b>Image</b></label>
          <input
            type="text"
            class="form-control"
            v-model="laptop.image"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <button class="btn btn-success btn-block">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/admin/Sidebar.vue";
import axios from "axios";

export default {
  components: { Sidebar },
  data() {
    return {
      laptop: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4001/api/edit-laptop/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.laptop = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4001/api/update-laptop/${this.$route.params.id}`;

      axios
        .put(apiURL, this.laptop)
        .then((res) => {
          console.log(res);
          this.$router.push("/listlaptop");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.row {
  width: 100.65%;
  height: 93.8vh;
}
.col-md-6 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 700, "GRAD" 0, "opsz" 48;
  color: black;
}
input {
  height: 3.5rem;
  border-color: black;
}
@media screen and (max-width: 768px) {
  .row {
    width: 100%;
    height: auto;
  }
  .col-md-6 {
    width: 90%;
    margin: 0 auto;
  }
  .material-symbols-outlined {
    font-size: 2rem;
  }
  input {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .row {
    width: 100%;
    height: auto;
  }
  .col-md-6 {
    width: 90%;
    margin: 0 auto;
  }
  .material-symbols-outlined {
    font-size: 2rem;
  }
  input {
    width: 100%;
  }
}
</style>
