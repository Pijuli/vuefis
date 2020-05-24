<template>
  <div class="EfisPanel h-screen overflow-hidden">
    <attitude-indicator />
    <top-compass />
    <slip-indicator />
  </div>
</template>

<script>
import AttitudeIndicator from '@/components/AttitudeIndicator'
import TopCompass from '@/components/TopCompass'
import SlipIndicator from '@/components/SlipIndicator'

export default {
  name: 'EfisPanel',
  components: {
    AttitudeIndicator,
    TopCompass,
    SlipIndicator,
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