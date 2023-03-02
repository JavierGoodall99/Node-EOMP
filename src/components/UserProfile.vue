<template>
  <div class="container-fluid">
      <h1>USER CRUD</h1>
      <div class="search-bar">
          <input type="text" placeholder="Search User..." />
          <button>Search</button>
        </div>
      <table class="table table-striped table-hover">
          <thead class="tableHead text-white">
              <tr>
                  <th>Name</th>

                  <th>Surname</th>
                  <th>Gender</th>
                  <th>Email Address</th>
                  <th>Cell Number</th>
                  <th>User Profile</th>
                  <th>Join Date</th>
                  <th>Edit & Del</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="user in addUser" :key="user">
                  <td>{{ expense.name }}</td>

                  <td>R{{ expense.amount }}</td>
                  <td><div class="btn-group">
                   <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editExpenseModal">
Edit
</button>

<!-- Modal -->
<div class="modal fade" id="editExpenseModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Edit This User:</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <input class="form-control text-center newExpenseName" type="text" placeholder="New Name" required>

      <input class="form-control text-center newExpenseAmount" type="number" placeholder="New Amount" required>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
    </div>
  </div>
</div>
</div>
                      <button class="btn btn-danger">Del</button>
                  </div></td>
              </tr>
          </tbody>
      </table>
      <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#expenseModal">
ADD USER
</button>

<!-- Modal -->
<div class="modal fade" id="expenseModal" tabindex="-1" aria-labelledby="expenseModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="expenseModalLabel">Add the User</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form>
      <div class="user-box">
      <input required="" name="" type="text">
      <label>First Name</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>Surname</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>Gender</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="decimal">
      <label>Cell Number</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="number">
      <label>Email Address</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="number">
      <label>User Password</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="number">
      <label>Role</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>User Profile</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="number">
      <label>Join Date</label>
    </div>

    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="addExpense">Save changes</button>
    </div>
  </div>
</div>
</div>
  </div>
</template>

<style scoped>
.container-fluid{
padding: 0 10px;
}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  margin: 20px auto;
  transform: translate(-50%, -55%);
  background: rgba(0,0,0,.9);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
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
  color: #fff;
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
  background: linear-gradient(270deg, transparent, #fff);
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
  color: #aaa;
  border-radius: 5px;
}
.tableHead{
  background: linear-gradient(to bottom, #4b0082, #000000) ;
}
</style>

<script>
import router from '@/router'

export default {
  setup () {
    // eslint-disable-next-line no-undef
    const store = bStoreURL()
    const payload = {
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
    const addUser = () => {
      store.dispatch('addUser', payload)
      router.push({ name: 'home' })
    }
    // eslint-disable-next-line no-undef
    const userMessage = computed(() => store.state.message)

    return {
      payload,
      addUser,
      userMessage
    }
  }
}
</script>
