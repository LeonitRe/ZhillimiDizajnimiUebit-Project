<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container-fluid">
      <div class="admin-txt">
        <router-link to="/dashboard" class="link-light"
          ><h3>𝔸𝕕𝕞𝕚𝕟𝕚𝕤𝕥𝕣𝕒𝕥𝕠𝕣</h3></router-link
        >
      </div>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarCenteredExample"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <div class="dropdown show">
            <a
              class="btn btn-primary dropdown-toggle bg-primary"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <router-link to="/createcomputer" class="dropdown-item"
                >𝐂𝐫𝐞𝐚𝐭𝐞 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫</router-link
              >
              <router-link to="/listcomputer" class="dropdown-item"
                >𝐕𝐢𝐞𝐰 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫𝐬</router-link
              >
            </div>
          </div>
          <div class="dropdown show">
            <a
              class="btn btn-primary dropdown-toggle bg-primary"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              𝐋𝐚𝐩𝐭𝐨𝐩
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <router-link to="/createlaptop" class="dropdown-item"
                >𝐂𝐫𝐞𝐚𝐭𝐞 𝐋𝐚𝐩𝐭𝐨𝐩</router-link
              >
              <router-link to="/listlaptop" class="dropdown-item"
                >𝐕𝐢𝐞𝐰 𝐋𝐚𝐩𝐭𝐨𝐩𝐬</router-link
              >
            </div>
          </div>
          <div class="dropdown show">
            <a
              class="btn btn-primary dropdown-toggle bg-primary"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              𝐏𝐡𝐨𝐧𝐞
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <router-link to="/createphone" class="dropdown-item"
                >𝐂𝐫𝐞𝐚𝐭𝐞 𝐏𝐡𝐨𝐧𝐞</router-link
              >
              <router-link to="/listphone" class="dropdown-item"
                >𝐕𝐢𝐞𝐰 𝐏𝐡𝐨𝐧𝐞𝐬</router-link
              >
            </div>
          </div>
          <div class="dropdown show">
            <a
              class="btn btn-primary dropdown-toggle bg-primary"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              𝐓𝐕
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <router-link to="/createtv" class="dropdown-item"
                >𝐂𝐫𝐞𝐚𝐭𝐞 𝐓𝐕</router-link
              >
              <router-link to="/listtv" class="dropdown-item"
                >𝐕𝐢𝐞𝐰 𝐓𝐕𝐬</router-link
              >
            </div>
          </div>
          <div class="dropdown show test">
            <a
              class="btn btn-primary dropdown-toggle bg-primary"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              𝐎𝐮𝐭𝐥𝐞𝐭
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <router-link to="/createoutlet" class="dropdown-item"
                >𝐂𝐫𝐞𝐚𝐭𝐞 𝐎𝐮𝐭𝐥𝐞𝐭</router-link
              >
              <router-link to="/listoutlet" class="dropdown-item"
                >𝐕𝐢𝐞𝐰 𝐎𝐮𝐭𝐥𝐞𝐭𝐬</router-link
              >
            </div>
          </div>
        </ul>
      </div>
      <div>
        <router-link to="/" class="link-light shadow-5"
          ><h5>ʀᴇᴛᴜʀɴ ʜᴏᴍᴇ</h5></router-link
        >
      </div>
    </div>
  </nav>
  <div></div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.nav-link {
  font-size: 1.3rem;
  border-radius: 2rem;
  margin-right: 2rem;
  transition: 0.5s;
}
.nav-link:hover {
  background-color: white;
  color: rgb(97, 97, 97) !important;
  border-radius: 1rem;
}
.link-light,
.btn,
.btn .btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: 0 !important;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-spacing: 100px;
  text-decoration: none !important;
  border: none;
}
</style>
