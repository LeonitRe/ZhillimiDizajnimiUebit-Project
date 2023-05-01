<template>
  <Sidebar />
  <div class="title">
    <h3>Here u can Modify Outlet Products</h3>
  </div>
  <span class="material-symbols-outlined"> auto_fix </span>
  <br />
  <br />
  <main class="row">
    <div
      v-for="outlet in Outlets"
      :key="outlet._id"
      class="card box card-deck"
      style="width: 18rem"
    >
      <img :src="outlet.image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h4 class="card-title">{{ outlet.name }}</h4>
        <p class="card-text">
          {{ outlet.description }}
        </p>
        <h6 class="card-text">
          <s>${{ outlet.price }}</s>
        </h6>
        <h6 class="card-text">${{ outlet.discount }}</h6>
        <router-link
          :to="{ name: 'editoutlet', params: { id: outlet._id } }"
          class="btn btn-success"
          >Edit
        </router-link>
        <button
          @click.prevent="deleteOutlet(outlet._id)"
          class="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "@/components/admin/Sidebar.vue";
import axios from "axios";
export default {
  components: { Sidebar },
  data() {
    return {
      Outlets: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4001/api/createoutlet";
    axios
      .get(apiURL)
      .then((res) => {
        this.Outlets = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteOutlet(id) {
      let apiURL = `http://localhost:4001/api/delete-outlet/${id}`;
      let indexOfArrayItem = this.Outlets.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Outlets.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 700, "GRAD" 0, "opsz" 48;
}

.btn-success {
  margin-right: 10px;
}
.row {
  width: 100%;
}
</style>
<style scoped>
.row {
  width: 100%;
}
main {
  display: flex;
  justify-content: space-evenly;
  padding: 0;
}
.card {
  margin-bottom: 2rem;
}
.title {
  border-bottom: 1px blue;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
h3 {
  text-shadow: 1px 1px 2px lightblue, 0 0 0.1em rgb(55, 55, 55);
}
img {
  height: 250px;
  width: 100%;
}
s {
  color: red;
}
@media (max-width: 767.98px) {
  main {
    flex-wrap: wrap;
  }
  .card {
    width: 100%;
    margin-bottom: 1rem;
  }
  .card-deck {
    margin-bottom: 0;
  }
  img {
    height: auto;
    max-width: 100%;
  }
}

/* Styles for screens larger than 768px */
@media (min-width: 768px) {
  main {
    justify-content: space-evenly;
  }
  .card {
    width: calc(33.33% - 1rem);
    margin-right: 1rem;
    margin-bottom: 0;
  }
  .card-deck {
    margin-bottom: 2rem;
  }
}

/* Styles for screens larger than 992px */
@media (min-width: 992px) {
  .title {
    height: 10vh;
  }
}

/* Styles for screens larger than 1200px */
@media (min-width: 1200px) {
  .title {
    height: 15vh;
  }
}
</style>
