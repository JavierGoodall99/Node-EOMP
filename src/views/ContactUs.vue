<template>
  <section class="head pb-5" id="Contact">
    <div class="container py-5">
      <div class="card1">
        <div class="card-bodyContact">
          <h1 class="font-weight-light text-center py-5">Contact Us</h1>
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="row pt-3">
              </div>
              <div class="row pt-3">
                <div class="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                  <img src="https://i.postimg.cc/d1y60vMZ/CEO.jpg" alt="Call Us" class="rounded-circle" width="90" height="90" />
                </div>
                <div class="col-lg-10 col-md-9 col-sm-9 col-9">
                  <h5 class="font-weigh-light text-white-50"><b>Mkhuseli Mkeyiya</b></h5>
                  <p class="text-white">+27 68 522 8188</p>
                  <p class="text-white">17mkhuselimkeyiya@gmail.com</p>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                  <img src="https://i.postimg.cc/x11PzLD2/janator.jpg" alt="Email" class="rounded-circle" width="90" height="90" />
                </div>
                <div class="col-lg-10 col-md-9 col-sm-9 col-9">
                  <h5 class="font-weight-light text-white-50"><b>Javier Goodall</b></h5>
                  <p class="text-white">+27 84 290 9844</p>
                  <p class="text-white">javiergoodall@outlook.com</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <form action="https://formspree.io/f/mqkjgnln" method="post">
                <div class="form-row">
                  <div class="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                    <label>First Name</label>
                    <input type="text" class="form-control" placeholder="First Name" name="firstName">
                  </div>
                  <div class="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                    <label>Last Name</label>
                    <input type="text" class="form-control" placeholder="Last Name" name="lastName">
                  </div>
                </div>
                <label>Email</label>
                <input type="email" placeholder="someone@gmail.com" class="form-control" name="EmailAddres">
                <label>Your Message</label>
                <textarea class="form-control mb-3" id="" placeholder="Enter your message" cols="30" rows="10"
                  name="Message"></textarea>
                <button class="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.head{
    background-color: black;
    background-size: 100% 100%;
}
.card-bodyContact{
    background-color:  #4b0082;
}
.btn {
background: black;
padding: 10px 18px;
text-decoration: none;
font-weight: bold;
color: #4b0082;
display: inline-block;
margin: 30px 0;
border-radius: 5px;
}
.btn {
    background-color:black;
    border: 2px solid black;
    cursor: pointer;
}
.btn:hover{
    color: #4b0082;
    background: black;
    transform: scale(1.1);
    border: 2px solid black;
}
</style>
