<template>
  <section id="home">
    <div class="container py-3">
            <div class="row py-7">
                <div class="col-lg-7 pt-5 text-center">
                    <h1>Entering the Digital<br> Verse</h1>
                    <a href="#Product"><button class="btn1 mt-3">View NFT's</button></a>
                </div>
            </div>
        </div>
        <div class="images">
        <div class="d-none d-md-block">
          <img src="https://i.postimg.cc/xCpfDGSC/AMETHYST2.gif" class="kreeD-Shape">
        </div>
      </div>
  </section>
</template>
<style>
#home {
  background-image: url('https://i.postimg.cc/DyvLqfS2/background-Fullstack.jpg');
  background-size: cover;
    height: 100vh;
    background-position: 50% 50%;
    width: 100%;
}
.container h1{
    font-size: 4rem;
    font-weight: 700;
    color: white;
}
.images {
    width: 45%;
    height: 60%;
    position: absolute;
    bottom:0;
    right: 100px;
    margin-bottom:10%;
}
.images img {
    height: 100%;
    position: absolute;
    left: 50%;
    bottom: 0px;
}
</style>
