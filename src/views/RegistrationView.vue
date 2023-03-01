<template>
<div class="login-box">
  <p>REGISTER</p>
  <form class="form" @submit.prevent="signUp">
    <div class="user-box">
      <input required="" name="" type="text">
      <label>First Name</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>Last Name</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>Gender</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="email">
      <label>Image</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>Email</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="password">
      <label>Password</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="date">
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

  <!-- <pre>{{ this.payload }}</pre>
  <div class="container-fluid">
      <div class="row">
          <h2 class="display-2">Registration</h2>
      </div>
      <div class="row">
          <div class="col">
              <form class="form" @submit.prevent="signUp">
                  <div class="form-control-wrapper">
                  <span class="inline">
                    <input class="form-control" type="text" placeholder="Firstname" required v-model="payload.firstName"/>
                    <i class="bi bi-person"></i>
                  </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="text" class="form-control" placeholder="Lastname" v-model="payload.lastName">
                      <i class="bi bi-person"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="text" class="form-control" placeholder="Gender" v-model="payload.gender">
                      <i class="bi bi-person-fill"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="text" class="form-control" placeholder="Cellphone" v-model="payload.cellphoneNumber" maxlength="12">
                      <i class="bi bi-telephone-fill"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd">
                      <i class="bi bi-envelope"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass">
                      <i class="bi bi-person-fill"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="text" class="form-control" placeholder="Profile URL" v-model="payload.userProfile">
                      <i class="bi bi-link"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="date" class="form-control" placeholder="Joined Date" v-model="payload.joinDate">
                    </span >
                </div>
                <div class="form-control-wrapper">
                  <label class="form-control bg-gradient" v-show="userMsg">{{userMsg}}</label>
                </div>
                <div class="form-control-wrapper">
                  <button type="submit" class="btn btn-success w-100">Register</button>
                </div>
            </form>
          </div>
      </div>
  </div> -->
</template>
<!--<div class="container-fluid">
  <div class="row">
          <h2 class="display-2">Registration</h2>
      </div>
  <form class="form" @submit.prevent="signUp">
      <div class="user-box">
        <div class="form-control-wrapper">
          <span class="inline">
      <input class="form-control" required v-model="payload.firstName" type="text">
      <label>First Name</label>
      <i class="bi bi-person"></i>
        </span>
      </div>
    </div>
    <div class="user-box">
        <div class="form-control-wrapper">
          <span class="inline">
      <input class="form-control" required v-model="payload.lastName" type="text">
      <label>First Name</label>
      <i class="bi bi-person"></i>
        </span>
      </div>
    </div>
    <div class="user-box">
        <div class="form-control-wrapper">
          <span class="inline">
      <input class="form-control" required v-model="payload.gender" type="text">
      <label>First Name</label>
      <i class="bi bi-person"></i>
        </span>
      </div>
    </div>
    <div class="user-box">
        <div class="form-control-wrapper">
          <span class="inline">
      <input class="form-control" required v-model="payload.cellphoneNumber" type="text" maxlength="12">
      <label>First Name</label>
      <i class="bi bi-person"></i>
        </span>
      </div>
    </div>
    <div class="user-box">
        <div class="form-control-wrapper">
          <span class="inline">
      <input class="form-control" required v-model="payload.emailAdd" type="text">
      <label>First Name</label>
      <i class="bi bi-person"></i>
        </span>
      </div>
    </div>
    <div class="user-box">
        <div class="form-control-wrapper">
          <span class="inline">
      <input class="form-control" required v-model="payload.userPass" type="password">
      <label>First Name</label>
      <i class="bi bi-person"></i>
        </span>
      </div>
    </div>
    <div class="user-box">
        <div class="form-control-wrapper">
          <span class="inline">
      <input class="form-control" required v-model="payload.userProfile" type="text">
      <label>First Name</label>
      <i class="bi bi-person"></i>
        </span>
      </div>
    </div>
     <div class="user-box">
        <div class="form-control-wrapper">
          <span class="inline">
      <input class="form-control" required v-model="payload.userProfile" type="date">
      <label>First Name</label>
      <i class="bi bi-person"></i>
        </span>
      </div>
    </div>
    <div class="user-box">
      <input required="" name="" type="number">
      <label>Join Date</label>
    </div>

    <div class="form-control-wrapper">
                  <button type="submit" class="btn btn-success w-100">Register</button>
                </div>
  </form>
</div> -->
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
<style scoped>
.login-box {
  position: absolute;
  top: 65%;
  left: 50%;
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
  background: transparent;
  color: #64055c;
  border-radius: 5px;
}
</style>
