<template>
  <nav class="navbar navbar-expand-lg bg-black sticky-top">
      <div class="container-fluid">
        <img src="https://i.postimg.cc/yYLXX01N/Free-Sample-By-Wix-1.jpg" class="logo" alt="logo" loading="lazy">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <router-link to="/" class="nav-link text-white-50">HOME</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/about" class="nav-link text-white-50">ABOUT</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/products" class="nav-link text-white-50">PRODUCTS</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/admin" class="nav-link text-white-50">ADMIN</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/contact" class="nav-link text-white-50">CONTACT-US</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/login" class="nav-link text-white-50">LOGIN</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/register" class="nav-link text-white-50">REGISTER</router-link>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style>
.logo{
  width: 5rem;
}
.nav-link{
  color: white;
}
.navbar-nav{
  z-index: 5rem;
}

</style>
