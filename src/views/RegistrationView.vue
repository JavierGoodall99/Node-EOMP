<template>
<div class="login-box">
  <p>REGISTER</p>
  <form class="form" id="login-form" @submit.prevent="signUp">
    <div class="user-box">
      <input required v-model="payload.firstName" name="" type="text">
      <label>First Name</label>
    </div>
    <div class="user-box">
      <input required v-model="payload.lastName" name="" type="text">
      <label>Last Name</label>
    </div>
    <div class="user-box">
      <input required v-model="payload.gender" name="" type="text">
      <label>Gender</label>
    </div>
    <div class="user-box">
      <input required v-model="payload.cellphoneNumber" name="" type="text">
      <label>Cellphone Number</label>
    </div>
    <div class="user-box">
      <input required v-model="payload.userProfile" name="" type="email">
      <label>Image</label>
    </div>
    <div class="user-box">
      <input required v-model="payload.emailAdd" name="" type="text">
      <label>Email</label>
    </div>
    <div class="user-box">
      <input required v-model="payload.userPass" name="" type="password">
      <label>Password</label>
    </div>
    <div class="user-box">
      <input required v-model="payload.joinDate" name="" type="date">
      <label></label>
    </div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <a href="#">
      Submit
    </a>
  </form>
  <p>Have an account? <a href="" class="a2">Login!</a></p>
</div>
</template>
<style scoped>
.login-box {
  position: absolute;
  top: 65%;
  left: 50%;
  height: 45rem;
  width: 400px;
  padding: 40px;
  margin: 20px auto;
  transform: translate(-50%, -55%);
  background: rgba(0, 0, 0, 0.9);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgb(15, 0, 17);
  border-radius: 10px;
}

.login-box p:first-child {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #9d0b91;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 3px
}
.login-box a:hover {
  background: #fff;
  color: #272727;
  border-radius: 5px;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #fff);
  animation: btn-anim1 1.5s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #fff);
  animation: btn-anim2 1.5s linear infinite;
  animation-delay: .375s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #920987);
  animation: btn-anim3 1.5s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #fff);
  animation: btn-anim4 1.5s linear infinite;
  animation-delay: 1.125s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,100% {
    bottom: 100%;
  }
}

.login-box p:last-child {
  color: #aaa;
  font-size: 14px;
}

.login-box a.a2 {
  color: #fff;
  text-decoration: none;
}

.login-box a.a2:hover {
  background: #64055c;
  color: white;
  border-radius: 5px;
}
</style>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup () {
    const payload = {
      firstName: '',
      lastName: '',
      gender: '',
      cellphoneNumber: '',
      emailAdd: '',
      userPass: '',
      userProfile: '',
      joinDate: ''
    }
    const store = useStore()
    const signUp = () => {
      store.dispatch('registration', payload)
      store.dispatch('fetchUsers')
    }
    const userMsg =
    computed(() => store.state.message)
    return {
      payload,
      userMsg,
      signUp
    }
  }
}
</script>
<!-- <template>
  <div class="registration-form">
    <h2 class="text-black">Registration</h2>
    <form>
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName" v-model="firstName">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" v-model="lastName">
      </div>
      <div class="form-group">
        <label for="gender" class="text-black">Gender</label>
        <select class="form-control" id="gender" v-model="gender">
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
           <option value="other">Other</option> -->
        <!-- </select>
      </div>
      <div class="form-group">
        <label for="cellphoneNumber">Cellphone Number</label>
        <input type="text" class="form-control" id="cellphoneNumber" v-model="cellphoneNumber">
      </div>
      <div class="form-group">
        <label for="emailAdd">Email Address</label>
        <input type="email" class="form-control" id="emailAdd" v-model="emailAdd">
      </div>
      <div class="form-group">
        <label for="userPass">Password</label>
        <input type="password" class="form-control" id="userPass" v-model="userPass">
      </div>
      <div class="form-group">
        <label for="userRole">User Role</label>
        <select class="form-control" id="userRole" v-model="userRole">
          <option value="">Select user role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div class="form-group">
        <label for="userProfile">User Profile</label>
        <input type="text" class="form-control" id="userProfile" v-model="userProfile">
      </div>
      <div class="form-group">
        <label for="joinDate">Join Date</label>
        <input type="date" class="form-control" id="joinDate" v-model="joinDate">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="registerUser">Register</button>
    </form>
  </div>
</template> -->

<!-- <script>
export default {
  name: 'RegistrationForm',

  data () {
    return {
      firstName: '',
      lastName: '',
      gender: '',
      cellphoneNumber: '',
      emailAdd: '',
      userPass: '',
      userRole: '',
      userProfile: '',
      joinDate: ''
    }
  },

  methods: {
    registerUser () {
    }
  }
}
</script> -->

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Inconsolata&display=swap');

body {
  background: linear-gradient(to bottom, #4b0082, #000000);
    }

    label{
      color: black;
    }

    .registration-form {
      width: 500px;
      margin: 50px auto;
      background-color: #f9f9f9;
      padding: 30px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      font-family: 'Fjalla One', sans-serif;
    }

    h1 {
      text-align: center;
      margin-top: 0;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    input[type="radio"] {
      display: inline-block;
      width: auto;
    }

    .btn {
      display: block;
      width: 100%;
      padding: 10px;
      background-color: #4b0082;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }

    .btn:hover {
      background-color: black;
    }
    </style> -->
