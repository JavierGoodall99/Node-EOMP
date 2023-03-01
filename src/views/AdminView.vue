<template>
  <div>
    <UserProfile/> <br> <br>
    <ProductProfile/>
  </div>
</template>
<script>
import ProductProfile from '@/components/ProductProfile.vue'
import UserProfile from '@/components/UserProfile.vue'
export default {
  components: {
    UserProfile,
    ProductProfile
  }
}
</script>
