<template>
  <div class="EfisPanel h-screen overflow-hidden">
    <attitude-indicator />
    <top-compass />
    <slip-indicator />
    <speed-indicator />
  </div>
</template>

<script>
import AttitudeIndicator from '@/components/AttitudeIndicator'
import TopCompass from '@/components/TopCompass'
import SlipIndicator from '@/components/SlipIndicator'
import SpeedIndicator from '@/components/SpeedIndicator'

export default {
  name: 'EfisPanel',
  components: {
    AttitudeIndicator,
    TopCompass,
    SlipIndicator,
    SpeedIndicator,
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