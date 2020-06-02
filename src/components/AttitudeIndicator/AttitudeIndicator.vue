<template lang="html">
  <div class="AttitudeIndicator h-full relative">
    <div
      class="AttitudeIndicator__indicator h-full"
      :style="rollAndPitch"
    >
      <!-- Top -->
      <div class="AttitudeIndicator__up"/>
      <div class="AttitudeIndicator__upContainer">
        <attitude-lines length="quarter" :position="74" :number="30"/>
        <attitude-lines length="eight" :position="70"/>
        <attitude-lines length="quarter" :position="66" :number="20"/>
        <attitude-lines length="eight" :position="62"/>
        <attitude-lines length="quarter" :position="58" :number="10"/>
        <attitude-lines length="eight" :position="54"/>
      </div>
      
      <!-- Bottom -->
      <div class="AttitudeIndicator__down"/>
      <div class="AttitudeIndicator__downContainer">
        <attitude-lines length="eight" :position="46"/>
        <attitude-lines length="quarter" :position="42" :number="10"/>
        <attitude-lines length="eight" :position="38"/>
        <attitude-lines length="quarter" :position="34" :number="20"/>
        <attitude-lines length="eight" :position="30"/>
        <attitude-lines length="quarter" :position="26" :number="30"/>
      </div>

      <!-- Middle -->
      <attitude-lines length="full" :position="50"/>
    </div>

    <!-- Static -->
    <static-markers />
    <inclination-circle :roll="roll"/>
  </div>
</template>

<script>
import { DATA_NAMESPACE } from '@/store/store-types'
import { mapState } from 'vuex'

import AttitudeLines from '@/components/AttitudeIndicator/AttitudeLines'
import StaticMarkers from '@/components/AttitudeIndicator/StaticMarkers'
import InclinationCircle from '@/components/AttitudeIndicator/InclinationCircle'

export default  {
  name: 'AttitudeIndicator',
  components: {
    AttitudeLines,
    StaticMarkers,
    InclinationCircle,
  },
  computed: {
    ...mapState(DATA_NAMESPACE, ['pitch','roll']),
    rollAndPitch () {
      return {
        transform: `rotate(${this.roll}deg) translateY(${this.pitch * 3.85}px)`,
      }
    },
  },
}


</script>

<style scoped lang="scss">
.AttitudeIndicator__indicator {
  // transition: all 0.2s linear;
  // will-change: transform;
}

.AttitudeIndicator__up {
  height: 100vh;
  width: 120vw;
  position: absolute;
  top: -50vh;
  left: -10vw;
  background-color: #2E6ABE;
}

.AttitudeIndicator__down {
  height: 100vh;
  width: 120vw;
  position: absolute;
  top: 50vh;
  left: -10vw;
  background-color: #4A5100;
}
</style>
