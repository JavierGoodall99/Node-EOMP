<template>
  <nav class="navbar navbar-expand-lg  nav-color">
    <div class="container-fluid">
      <img src="https://i.postimg.cc/ZnFrsK0p/Screenshot-2023-03-01-092841.png" class="logo" alt="logo" loading="lazy">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav justify-content-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link mx-3">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link mx-3">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link mx-3">PRODUCTS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link mx-3">CONTACT US</router-link>
          </li>
          <li class="nav-item ml-auto">
            <router-link to="/admin" class="nav-link mx-3">ADMIN</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link mx-3">LOGIN</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Inconsolata&display=swap');
.logo {
  width: 8rem;
}

.nav-color{
  background: linear-gradient(to top, #4b0082, #000000);
}

.nav-link {
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem 5rem 1rem 5rem;
  border-radius: 2rem;
  transition: all 0.3s ease;
  font-family: 'Fjalla One', sans-serif;
  font-weight: lighter;
  font-size: larger;
  position: relative;
  padding-bottom: 10px;
}

.navbar-expand-lg .navbar-collapse {
    justify-content: center;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: left;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

</style>
