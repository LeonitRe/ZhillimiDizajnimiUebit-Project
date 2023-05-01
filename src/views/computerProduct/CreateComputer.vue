<template>
  <Sidebar fixed="top" />
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center"><b>Create Computer</b></h3>
      <span class="material-symbols-outlined"> computer </span>
      <br />
      <form @submit.prevent="handleSubmitForm">
        <br />
        <div class="form-group">
          <input
            placeholder="Computer Name"
            type="text"
            class="form-control"
            v-model="computer.name"
            required
          />
        </div>
        <br />
        <div class="form-group">
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
          <input
            placeholder="Computer Price"
            type="number"
            class="form-control"
            v-model="computer.price"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <input
            placeholder="Computer Image"
            type="text"
            src="images/img"
            class="form-control"
            v-model="computer.image"
          />
        </div>
        <br />
        <div class="form-group">
          <button class="btn btn-primary btn-block">Create</button>
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
      computer: {
        name: "",
        description: "",
        price: "",
        image: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4001/api/create-computer";

      axios
        .post(apiURL, this.computer)
        .then(() => {
          this.$router.push("/listcomputer");
          this.computer = {
            name: "",
            description: "",
            price: "",
            image: "",
          };
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
    width: 80%;
    margin: auto;
  }
  input {
    height: 3rem;
  }
}
</style>

<!-- width: 100.65%; height: 93.8vh; -->
