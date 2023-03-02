<template>
  <section class="contact" id="Contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-6">
          <div class="card shadow-lg">
            <div class="card-body">
              <h2 class="font-weight-bold text-center text-black mb-5">Contact Us</h2>
              <form action="https://formspree.io/f/xpzerlyo" method="post">
                <div class="form-group">
                  <label for="firstName" class="text-black">First Name</label>
                  <input type="text" class="form-control" id="firstName" placeholder="Enter your first name" name="firstName" required>
                </div>
                <div class="form-group">
                  <label for="lastName" class="text-black">Last Name</label>
                  <input type="text" class="form-control" id="lastName" placeholder="Enter your last name" name="lastName" required>
                </div>
                <div class="form-group">
                  <label for="email" class="text-black">Email address</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" name="EmailAddress" required>
                </div>
                <div class="form-group">
                  <label for="message" class="text-black">Your Message</label>
                  <textarea class="form-control" id="message" rows="5" placeholder="Enter your message" name="Message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 mt-5 mt-md-0">
          <div class="card shadow-lg">
            <div class="card-body text-center">
              <h2 class="font-weight-bold text-black mb-4">Contact Information</h2>
              <div class="row">
                <div class="col-12 mb-4">
                  <img src="https://i.postimg.cc/d1y60vMZ/CEO.jpg" alt="Call Us" class="rounded-circle mx-auto" width="100" height="100" />
                  <h5 class="font-weight-bold text-black mt-3">Mkhuseli Mkeyiya</h5>
                  <p class="text-black mb-0">+27 68 522 8188</p>
                  <p class="text-black">17mkhuselimkeyiya@gmail.com</p>
                </div>
                <div class="col-12">
                  <img src="https://i.postimg.cc/x11PzLD2/janator.jpg" alt="Email" class="rounded-circle mx-auto" width="100" height="100" />
                  <h5 class="font-weight-bold text-black mt-3">Javier Goodall</h5>
                  <p class="text-black mb-0">+27 84 290 9844</p>
                  <p class="text-black">javiergoodall@outlook.com</p>
                </div>
              </div>
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
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Inconsolata&display=swap');

#Contact {
  font-family: 'Fjalla One', sans-serif;
  background: linear-gradient(to bottom, #4b0082, #000000);
  /* width: 1505px; */
}

.contact {
  background-color: #f8f9fa;
  padding: 50px 0;
}

.card {
  border-radius: 15px;
  border: none;
  transition: all 0.3s;

box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.card1 {
background-color: #4b0082;
border-radius: 15px;
border: none;
transition: all 0.3s;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.card-bodyContact {
padding: 50px;
}

h1 {
font-size: 48px;
color: #ffffff;
font-weight: 500;
margin-bottom: 30px;
}

h5 {
font-size: 24px;
color: #ffffff;
font-weight: 300;
margin-bottom: 15px;
}

label {
font-size: 20px;
color: #4b0082;
font-weight: 500;
margin-bottom: 5px;
}

.form-control {
border-radius: 5px;
border: none;
background-color: #4c008225;
padding: 10px 20px;
color: #4b0082;
font-size: 18px;
font-weight: 300;
margin-bottom: 30px;
}

.form-control:focus {
box-shadow: none;
border-color: #4b0082;
}

textarea.form-control {
height: 150px;
resize: none;
}

.btn {
background-color: #4b0082;
border: none;
cursor: pointer;
padding: 15px 30px;
color: #ffffff;
font-size: 18px;
font-weight: 500;
border-radius: 5px;
transition: all 0.3s;
}

.btn:hover {
background-color: #ffffff;
color: #4b0082;
}

.rounded-circle {
border-radius: 50%;
}

@media (max-width: 768px) {
h1 {
font-size: 36px;
}
.card-bodyContact {
padding: 30px;
}
h5 {
font-size: 18px;
}
label {
font-size: 18px;
}
.form-control {
font-size: 16px;
}
.btn {
font-size: 16px;
padding: 12px 24px;
}
}
</style>
