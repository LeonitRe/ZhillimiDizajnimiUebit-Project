<script>
import facebook from "@/assets/facebook.png";
import github from "@/assets/github.png";
import google from "@/assets/google.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";
import twitter from "@/assets/twitter.png";

export default {
  name: "App",
  data: function () {
    return {
      twitter: twitter,
      facebook: facebook,
      google: google,
      linkedin: linkedin,
      github: github,
      instagram: instagram,
      autoChangeSlide() {
        setInterval(() => {
          this.next();
        }, 3000);
      },
    };
  },

  beforeMount() {
    this.autoChangeSlide();
  },
};
</script>

<template>
  <footer class="text-center text-lg-start bg-white text-muted">
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>

      <div class="d-flex flex-wrap">
        <a href="#" class="me-4 mb-2 link-secondary">
          <img :src="facebook" alt="Facebook" class="social" />
        </a>
        <a href="#" class="me-4 mb-2 link-secondary">
          <img :src="twitter" alt="Twitter" class="social" />
        </a>
        <a href="#" class="me-4 mb-2 link-secondary">
          <img :src="google" alt="Google" class="social" />
        </a>
        <a href="#" class="me-4 mb-2 link-secondary">
          <img :src="instagram" alt="Instagram" class="social" />
        </a>
        <a href="#" class="me-4 mb-2 link-secondary">
          <img :src="linkedin" alt="LinkedIn" class="social" />
        </a>
        <a href="#" class="me-4 mb-2 link-secondary">
          <img :src="github" alt="GitHub" class="social" />
        </a>
      </div>
    </section>

    <section class="py-3">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4 mb-4 mb-lg-0">
            <h6 class="text-uppercase fw-bold mb-4">Products</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-reset">Computers</a></li>
              <li><a href="#" class="text-reset">Laptops</a></li>
              <li><a href="#" class="text-reset">Phones</a></li>
              <li><a href="#" class="text-reset">TVs</a></li>
            </ul>
          </div>

          <div class="col-12 col-lg-4 mb-4 mb-lg-0">
            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-reset">Pricing</a></li>
              <li><a href="#" class="text-reset">Settings</a></li>
              <li><a href="#" class="text-reset">Orders</a></li>
              <li><a href="#" class="text-reset">Help</a></li>
            </ul>
          </div>

          <div class="col-12 col-lg-4">
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p class="mb-1">
              <i class="fas fa-home me-3 text-secondary"></i>Pristina, PR 1001,
              KS
            </p>
            <p class="mb-1">
              <i class="fas fa-envelope me-3 text-secondary"></i
              >eCommerce@gmail.com
            </p>
            <p class="mb-1">
              <i class="fas fa-phone me-3 text-secondary"></i>+383 XX XXX XXX
            </p>
            <p class="mb-1">
              <i class="fas fa-print me-3 text-secondary"></i>+383 XX XXX XXX
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025)">
      © 2023 Copyright:
      <a class="text-reset fw-bold" href="#">ALLEz</a>
    </div>
  </footer>
</template>
<style scoped>
.social {
  height: 1.7rem;
  width: 1.7rem;
}
p {
  color: black;
}
a {
  text-decoration: none;
  font-size: 1.1rem;
  color: blue;
}
</style>
