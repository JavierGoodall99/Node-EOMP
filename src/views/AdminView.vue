<template>
  <div>
    <UserProfile/> <br> <br>
    <ProductProfile/>
    <SpinnerComponent/>
  </div>
</template>
<script>
import ProductProfile from '@/components/ProductProfile.vue'
import SpinnerComponent from '@/components/spinnerComponent.vue'
import UserProfile from '@/components/UserProfile.vue'
export default {
  components: {
    UserProfile,
    ProductProfile,
    SpinnerComponent
  }
}
</script>
