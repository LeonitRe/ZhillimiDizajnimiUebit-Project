<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <Sidebar class="sidebar" />
      </div>
      <div class="col-md-9">
        <main class="d-flex flex-column">
          <div class="">
            <h2>Here u Can Upload an Nav item Link</h2>
          </div>
          <form class="">
            <div class="input-group w-50 p-2">
              <span class="input-group-text">NavLink Name</span>
              <input
                type="text"
                class="form-control"
                v-model="navLink.linkName"
              />
            </div>
            <div class="input-group w-50 p-2">
              <span class="input-group-text">Which Product</span>
              <input
                type="text"
                class="form-control"
                v-model="navLink.linkName"
              />
            </div>
          </form>
        </main>
        <div class="d-flex justify-content-end mt-3">
          <button type="button" class="btn btn-primary">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/admin/Sidebar.vue";
export default {
  components: { Sidebar },
  data: function () {
    return {
      navLink: {
        linkName: "",
      },
    };
  },
};
</script>

<style scoped>
.main {
  margin-top: 5%;
}
</style>
