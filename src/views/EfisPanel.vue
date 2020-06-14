<template>
  <div class="EfisPanel h-screen overflow-hidden">
    <attitude-indicator />
    <top-compass />
    <slip-indicator />
    <speed-indicator />
    <altitude-indicator />
    <router-link class="EfisPanel__config text-white" to="/config">CONFIG</router-link>
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
  bottom: 5px;
  right: 10px;
}
</style>