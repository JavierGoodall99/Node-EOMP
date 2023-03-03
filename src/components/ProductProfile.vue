<template>
  <div class="container-fluid">
      <h1 class="text-white"> NFT CRUD</h1>
      <div class="search-bar">
          <input type="text" placeholder="Search Product..." />
          <button>Search</button>
        </div>
        <!-- <div class="card" v-for="prod in products" :key="prod.id" style="width: 18rem;"> -->
      <table class="table table-striped table-hover">
          <thead class="tableHead text-black">
              <tr>
                <th>ProductID</th>
                  <th>NFT Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Image</th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="prod in products" :key="prod.id">
              <th scope="row">{{ prod.id }}</th>
              <td>{{ prod.prodName }}</td>
              <td>{{ prod.prodDescription }}</td>
              <td>{{ prod.category }}</td>
              <td>{{ prod.prodPrice }}</td>
              <td>{{ prod.Quantity }}</td>
              <img :src="prod.imgURL" :alt="prodName" style="height:10rem;">
            </tr>
              <!-- <tr v-for="user in addUser" :key="user">
                  <td>{{ user.firstName }}</td>

                  <td>{{ user.lastName }}</td>
                  <td><div class="btn-group">

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editExpenseModal">
Edit
</button>

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
           -->
          </tbody>
      </table>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#expenseModal">
ADD PRODUCT
</button>

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
      <label>Product Name</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>Description</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>Category</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="decimal">
      <label>Price</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="number">
      <label>Quantity</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="number">
      <label>User Password</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="number">
      <label>Image</label>
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
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Inconsolata&display=swap');

/* .card1 {
  background-color: #eeeeee;
  border-radius: 15px;
  border: none;
  transition: all 0.3s;
  /* box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); */

  .container-fluid {
    /* margin-top: 3rem;
    margin-bottom: 3rem; */
    padding-bottom: 10rem;
    font-family: 'Fjalla One', sans-serif;
    background: linear-gradient(to bottom, #4b0082, #000000);

  }

  .search-bar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    border-radius: 5px;
    border-radius: 1rem 0 0 1rem;
    background-color: #4c008225;
    color: #4b0082;
  }

  .search-bar input[type="text"] {
    padding: 0.5rem;
  }
  .search-bar button {
    padding: 0.5rem;
    border-radius: 0 0.25rem 0.25rem 0;
    border: none;
    background-color: #000000;
    color: #ffffff;
  }

  .tableHead {
    background-color: rgb(255, 255, 255);
  }
  .user-box {
    position: relative;
    margin-bottom: 1.5rem;
  }
  .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1rem;
    padding: 0.625rem 0.75rem;
    color: #333;
    background-color: #fff;
    transition: all 0.3s ease;
  }
  .modal-header {
    border: none;
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
    .btn {
      display: block;
      margin: auto;
      width: 10rem;
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
    .table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: white;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
}
.table th,
.table td {
  padding: 1rem;
  text-align: left;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table th {
  font-weight: 600;
  background-color: #f5f5f5;
  border-bottom: 2px solid #dee2e6;
}

.table td {
  background-color: #fff;
  border-bottom: 1px solid #dee2e6;
}

@media (max-width: 767px) {
  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table th,
  .table td {
    white-space: nowrap;
  }
  .table td:before {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .table td:last-child {
    border-bottom: 0;
  }
}
</style>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    store.dispatch('showProducts')

    const products = computed(() => store.state.products)
    // const activeFilter = ref('all')

    // const filteredProducts = computed(() => {
    //   if (activeFilter.value === 'all') {
    //     return products.value
    //   } else {
    //     return products.value.filter(product => product.category === activeFilter.value)
    //   }
    // })
    // const filterProducts = (category) => {
    //   activeFilter.value = category
    // }
    return {
      products
      // filteredProducts,
      // filterProducts,
      // activeFilter
    }
  }
}
</script>
