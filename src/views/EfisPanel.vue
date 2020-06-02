<template>
  <div class="EfisPanel h-screen overflow-hidden">
    <attitude-indicator />
    <top-compass />
    <slip-indicator />
    <speed-indicator />
    <altitude-indicator />
    <router-link class="EfisPanel__config" to="/config">Config</router-link>
  </div>
</template>

<script>
import AttitudeIndicator from '@/components/AttitudeIndicator'
import TopCompass from '@/components/TopCompass'
import SlipIndicator from '@/components/SlipIndicator'
import SpeedIndicator from '@/components/SpeedIndicator'
import AltitudeIndicator from '@/components/AltitudeIndicator'

export default {
  name: 'EfisPanel',
  components: {
    AttitudeIndicator,
    TopCompass,
    SlipIndicator,
    SpeedIndicator,
    AltitudeIndicator,
  },
  computed: {
    name() {
      return false
    },
  },
  
}
</script>

<style lang="scss" scoped>
.EfisPanel__config {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>