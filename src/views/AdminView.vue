
import AdminLogin from '@/components/AdminLogin.vue';

<template>
  <div>
    <AdminLogin/>
    <UpdateProduct/>
  </div>
</template>
<script>
import AdminLogin from '@/components/AdminLogin.vue'
import UpdateProduct from '@/components/UpdateProduct.vue'
export default {
  components: {
    AdminLogin,
    UpdateProduct
  }
}
</script>
