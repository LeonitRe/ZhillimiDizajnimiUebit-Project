<script>
import logo from "@/assets/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  data: function () {
    return {
      logo: logo,
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLoginUser() {
      // Check for empty email and password
      if (!this.email || !this.password) {
        this.errorMessage = "Please enter both email and password.";
        return;
      }

      // Check if email matches with the one in the store
      const user = this.$store.state.user;
      if (user && user.email !== this.email) {
        this.errorMessage = "Email entered does not match.";
        return;
      }

      try {
        await this.$store.dispatch("loginUser", {
          email: this.email,
          password: this.password,
        });
        this.$router.push("/");
      } catch (errorMessage) {
        if (errorMessage.code === "auth/user-not-found") {
          this.errorMessage = "Incorrect Email or Password";
        } else {
          console.error(errorMessage);
          this.errorMessage = "Incorrect Email or Password";
        }
      }
    },
  },
};
</script>
<template>
  <section class="vh-100 bg-dark">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img :src="logo" class="img-fluid" alt="Sample image" />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form @submit.prevent="handleLoginUser" class="login-form">
            <!-- Email input -->
            {{ this.user && this.user.email }}
            <div class="form-outline mb-4">
              <input
                type="email"
                id="email"
                class="form-control form-control-lg"
                placeholder="Enter a valid email address"
                v-model="email"
              />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <input
                type="password"
                id="password"
                class="form-control form-control-lg"
                placeholder="Enter password"
                v-model="password"
              />
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <!-- Checkbox -->
              <div class="form-check mb-0">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label class="text-light form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" class="text-light">Forgot password?</a>
            </div>
            <div v-if="errorMessage" class="alert alert-danger">
              {{ errorMessage }}
            </div>
            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
              >
                Login
              </button>
              <p class="text-light small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?
                <router-link to="register" class="link-danger"
                  >Register</router-link
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"
    >
      <!-- Copyright -->
      <div class="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>
    </div>
  </section>
</template>

<style scoped>
.h-custom {
  height: calc(100% - 73px);
}

.img-fluid {
  height: 10rem;
  width: 10rem;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.05) 0px 1px 0px,
    rgba(255, 255, 255, 0.1) 0px 0px 8px;
}
a {
  text-decoration: none;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus,
input:focus,
input:active:focus,
input.active:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

/* .btn {
  background-color: rgb(111, 0, 0);
  border-color: rgb(111, 0, 0);
} */
.bg {
  background-color: rgb(111, 0, 0);
}
input {
  background-color: lightgray;
}
.social {
  height: 1.7rem;
  width: 1.7rem;
}
@media screen and (max-width: 768px) {
  .h-custom {
    height: auto;
  }
  .img-fluid {
    height: 8rem;
    width: 8rem;
  }
}
</style>
