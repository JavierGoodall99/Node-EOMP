<template lang="">
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  ADD PRODUCTS
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Products</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="login-box">
  <form>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>Product Name</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>Product Description</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>Category</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="decimal">
      <label>Category</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="number">
      <label>Product Quantity</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="text">
      <label>Product Image</label>
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
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
