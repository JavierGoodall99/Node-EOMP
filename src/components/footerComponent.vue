<template>

<footer>
    <section class="footer">
      <div class="social">
        <a href="https://www.facebook.com/mkhuseli.mkeyiya.3/"><i class="fa-brands fa-facebook"></i></a>|
        <a href="https://www.instagram.com/bro_mkhuras/"> <i class="fa-brands fa-instagram"></i></a>|
        <a href="https://www.youtube.com/channel/UCnzGCLKwcmOKlg2XW3Iey6A"><i class="fa-brands fa-youtube"></i></a>
        <p>Copyright &copy; 2023 Made by <b>Mkhuseli Mkeyiya & Jaiver Goodall </b></p>
      </div>
    </section>
  </footer>
</template>
<script>
export default {

}
</script>
<style>
footer {
    font-weight: 400;
    background-color: black;

}
.footer{
    padding: 40px 0;
    background-color: black;
}
footer p{
    color: white;
}
.footer .social {
    text-align: center;
    padding-bottom: 25px;
    color: #4b4c4d;

}
.footer .social a {
    font-size: 24px;
    color: inherit;
    border: 1px solid black;
    width: 40px;
    height: 40px;
    line-height: 38px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    margin: 0 8px;
    opacity:0.75 ;

}
.footer .social a:hover{
    opacity: 0.9;
}

</style>
