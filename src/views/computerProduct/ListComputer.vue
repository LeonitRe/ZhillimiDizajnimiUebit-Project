<template>
  <Sidebar />
  <div class="title">
    <h3>Here u can Modify Computer Products</h3>
  </div>
  <span class="material-symbols-outlined icons"> auto_fix </span>
  <br />
  <br />
  <main class="row">
    <div
      v-for="computer in Computers"
      :key="computer._id"
      class="card box card-deck"
      style="width: 18rem"
    >
      <img :src="computer.image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h4 class="card-title">{{ computer.name }}</h4>
        <p class="card-text">
          {{ computer.description }}
        </p>
        <h6 class="card-text">${{ computer.price }}</h6>
        <router-link
          :to="{ name: 'editcomputer', params: { id: computer._id } }"
          class="btn btn-success"
          >Edit
        </router-link>
        <button
          @click.prevent="deleteComputer(computer._id)"
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
      Computers: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4001/api/createcomputer";
    axios
      .get(apiURL)
      .then((res) => {
        this.Computers = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteComputer(id) {
      let apiURL = `http://localhost:4001/api/delete-computer/${id}`;
      let indexOfArrayItem = this.Computers.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Computers.splice(indexOfArrayItem, 1);
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
.icons {
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
