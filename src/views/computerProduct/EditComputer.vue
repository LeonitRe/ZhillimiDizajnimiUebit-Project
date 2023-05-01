<template>
  <Sidebar />
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center"><b>Update Computer</b></h3>
      <span class="material-symbols-outlined"> update </span>
      <br />
      <form @submit.prevent="handleUpdateForm">
        <br />
        <div class="form-group">
          <label><b>Name</b></label>
          <input
            type="text"
            class="form-control"
            v-model="computer.name"
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
            v-model="computer.description"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label><b>Price</b></label>
          <input
            type="text"
            class="form-control"
            v-model="computer.price"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label><b>Image</b></label>
          <input
            type="text"
            class="form-control"
            v-model="computer.image"
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
      computer: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4001/api/edit-computer/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.computer = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4001/api/update-computer/${this.$route.params.id}`;

      axios
        .put(apiURL, this.computer)
        .then((res) => {
          console.log(res);
          this.$router.push("/listcomputer");
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
</style>
