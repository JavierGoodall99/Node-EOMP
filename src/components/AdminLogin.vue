<template>
  <div class="login-box">
  <p>Login</p>
  <form @submit.prevent="signIn">
    <div class="user-box">
      <input required v-model="payload.emailAdd"  type="text">
      <label>Email</label>
    </div>
    <div class="user-box">
      <input required v-model="payload.userPass" type="password">
      <label>Password</label>
    </div>
    <a href="#" type="submit">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Inconsolata&display=swap');

body {
  background: linear-gradient(to bottom, #4b0082, #000000);
    }

    label{
      color: black;
    }

    .login-box {
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
    </style>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup () {
    const payload = {
      emailAdd: '',
      userPass: ''
    }
    const store = useStore()
    const signIn = () => {
      store.dispatch('login', payload)
    }
    const userMsg =
    computed(() => store.state.message)
    return {
      payload,
      userMsg,
      signIn
    }
  }
}
</script>
