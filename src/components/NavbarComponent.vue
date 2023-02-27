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
                      <router-link to="/" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/about" class="nav-link">About</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/products" class="nav-link">Products</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/admin" class="nav-link">Admin</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/contact" class="nav-link">Contact</router-link>
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
</style>
