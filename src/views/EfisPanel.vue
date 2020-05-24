<template>
  <div class="EfisPanel h-screen overflow-hidden">
    <AttitudeIndicator />
  </div>
</template>

<script>
import AttitudeIndicator from '@/components/AttitudeIndicator'

export default {
  name: 'EfisPanel',
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