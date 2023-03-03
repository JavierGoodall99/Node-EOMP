<template>
  <div class="product-details">
    <h2>{{ selectedProduct.prodName }}</h2>
    <table>
      <tr>
        <td>Product ID:</td>
        <td>{{ selectedProduct.id }}</td>
      </tr>
      <tr>
        <td>Category:</td>
        <td>{{ selectedProduct.category }}</td>
      </tr>
      <tr>
        <td>Description:</td>
        <td>{{ selectedProduct.prodDescription }}</td>
      </tr>
      <tr>
        <td>Price:</td>
        <td>R{{ selectedProduct.prodPrice }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['selectedProduct']
}
</script>

<style>
.product-details {
  margin-top: 2em;
  padding: 1em;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.product-details h2 {
  font-size: 1.2em;
  margin-bottom: 0.5em;
}
.product-details table {
  border-collapse: collapse;
  width: 100%;
}
.product-details table td {
  padding: 0.5em;
  border: 1px solid #ccc;
}
</style>
