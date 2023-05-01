<script>
import logo from "@/assets/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  data() {
    return {
      logo,
      name: "",
      email: "",
      password: "",
      loading: false,
      nameError: "",
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    async handleRegisterUser() {
      this.nameError = "";
      this.emailError = "";
      this.passwordError = "";

      if (!this.name.trim()) {
        this.nameError = "Name is required";
      }

      if (!this.email.trim()) {
        this.emailError = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.emailError = "Invalid email format";
      }

      if (!this.password.trim()) {
        this.passwordError = "Password is required";
      } else if (this.password.trim().length < 8) {
        this.passwordError = "Password must be at least 8 characters";
      } else if (!/[a-zA-Z]/.test(this.password.trim())) {
        this.passwordError = "Password must contain at least one letter";
      } else if (!/\d/.test(this.password.trim())) {
        this.passwordError = "Password must contain at least one number";
      }

      if (!this.nameError && !this.emailError && !this.passwordError) {
        this.loading = true;

        try {
          await this.$store.dispatch("registerUser", {
            name: this.name,
            email: this.email,
            password: this.password,
          });

          this.$router.push("/login");
        } catch (error) {
          console.error(error);
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>
<template>
  <section class="vh-100 bg-dark">
    <LoadingIndicator v-if="loading" />
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img :src="logo" class="img-fluid" alt="Sample image" />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form @submit.prevent="handleRegisterUser">
            <div class="form-row form-group"></div>
            <!-- Name input -->
            <div class="form-outline mb-4">
              <input
                type="text"
                id="name"
                class="form-control form-control-lg"
                placeholder="Name"
                v-model="name"
                :class="{ 'is-invalid': nameError }"
              />
              <label v-if="nameError" class="invalid-feedback">{{
                nameError
              }}</label>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-3">
              <input
                type="email"
                id="email"
                class="form-control form-control-lg"
                placeholder="Email"
                v-model="email"
                :class="{ 'is-invalid': emailError }"
              />
              <label v-if="emailError" class="invalid-feedback">{{
                emailError
              }}</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <input
                type="password"
                id="password"
                class="form-control form-control-lg"
                placeholder="Password"
                v-model="password"
                :class="{ 'is-invalid': passwordError }"
              />
              <label v-if="passwordError" class="invalid-feedback">{{
                passwordError
              }}</label>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
              >
                Register
              </button>
              <p class="text-light small fw-bold mt-2 pt-1 mb-0">
                Already have an account?
                <router-link to="login" class="link-danger">Login</router-link>
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

.bg {
  background-color: rgb(111, 0, 0);
}
input {
  background-color: lightgray;
}
@media (max-width: 767px) {
  .img-fluid {
    height: 7rem;
    width: 7rem;
  }

  .offset-xl-1 {
    margin-left: 0 !important;
  }

  .h-custom {
    height: auto;
  }
}
</style>
