<template>
  <div class="EfisPanel h-screen overflow-hidden">
    <attitude-indicator />
    <top-compass />
  </div>
</template>

<script>
import AttitudeIndicator from '@/components/AttitudeIndicator'
import TopCompass from '@/components/TopCompass'

export default {
  name: 'EfisPanel',
  components: {
    AttitudeIndicator,
    TopCompass,
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