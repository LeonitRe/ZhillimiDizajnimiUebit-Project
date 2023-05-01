<!-- eslint-disable vue/no-unused-components -->
<script>
import red from "@/assets/computer.png";
import green from "@/assets/laptop.png";
import white from "@/assets/phone.png";
import black from "@/assets/tv.png";

const images = [black, white, red, green];

import apple from "@/assets/brands/apple.jpg";
import lenovo from "@/assets/brands/lenovo.png";
import msi from "@/assets/brands/msi.png";
import samsung from "@/assets/brands/samsung.png";
import steelseries from "@/assets/brands/steelseries.png";
import zowie from "@/assets/brands/zowie.png";

import Footer from "../components/Footer.vue";

export default {
  components: { Footer },
  name: "App",
  data() {
    return {
      index: 0,
      image: images[0],
      main: {
        bgVideo: require("@/assets/videos/videos.mp4"),
      },
      images: [
        {
          img: [apple],
        },
        {
          img: [samsung],
        },
        {
          img: [msi],
        },
        {
          img: [steelseries],
        },
        {
          img: [lenovo],
        },
        {
          img: [zowie],
        },
      ],
    };
  },
  methods: {
    next() {
      this.index = (this.index + 1) % images.length;
      this.image = images[this.index];
    },
    autoChangeSlide() {
      setInterval(() => {
        this.next();
      }, 3000);
    },
  },
  beforeMount() {
    this.autoChangeSlide();
  },
};
</script>

<template>
  <div class="background-pic"></div>
  <h3>World Wide Shipping</h3>
  <video autoplay muted loop class="size" :poster="main.bgVideoPoster">
    <source class="video-bg" :src="main.bgVideo" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div class="containers">
    <img :src="image" class="picc" />
    <router-link to="#" class="link"
      ><h2><strong>Our Products</strong></h2></router-link
    >
  </div>
  <main>
    <h2 class="text-dark">Some famous brands we conatins</h2>
    <div
      class="brands-cont d-flex flex-row justify-content-center align-items-center background-primary"
    >
      <img v-for="image in images" :key="image" :src="image.img" class="img" />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.background-pic {
  height: 40vh;
  width: 100%;
  background-image: url("https://www.thewechatagency.com/wp-content/uploads/2021/12/1_SwFB1o_k1LGprN-XRUZQ8w.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.size {
  height: 60vh;
  width: 80%;
  object-fit: cover;
}
h3 {
  margin-top: 2rem;
  text-align: center;
}
.containers {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  margin-bottom: 10rem;
  margin-top: 10rem;
}
.picc {
  max-height: 60vh;
  max-width: 60vw;
}
.link {
  text-decoration: none;
  color: black;
  text-align: center;
  margin-top: 1rem;
}
.brands-cont {
  height: 20vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  background-color: rgb(208, 208, 208);
}
.img {
  width: 25%;
  max-width: 128px;
  height: auto;
}
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
