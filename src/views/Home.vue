<template>
  <div class="home h-screen overflow-hidden">
    <AttitudeIndicator />
  </div>
</template>

<script>
import AttitudeIndicator from '@/components/AttitudeIndicator'

export default {
  name: 'Home',
  components: {
    AttitudeIndicator,
  },
  computed: {
    name() {
      return false
    },
  },
  
}
</script>

<style lang="scss" scoped>

</style>