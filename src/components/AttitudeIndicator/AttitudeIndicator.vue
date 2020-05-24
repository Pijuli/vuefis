<template lang="html">
  <div class="AttitudeIndicator h-full relative">
    <div class="AttitudeIndicator__indicator h-full">
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
    <inclination-circle />
  </div>
</template>

<script>
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
}


</script>

<style scoped lang="scss">
.AttitudeIndicator__indicator {
  animation: spin 6s cubic-bezier(.5, 0, .5, 1) infinite;
  @keyframes spin {
    12% { transform: rotate(30deg); }
    25% { transform: rotate(0deg); }
    37% { transform: rotate(-30deg); }
    50% { transform: rotate(0deg); }
    62% { transform: translateY(30px); }
    75% { transform: translateY(0px); }
    87% { transform: translateY(-30px); }
    100% { transform: translateY(0px); }
  }
}

.AttitudeIndicator__up {
  height: 100vh;
  width: 150vw;
  position: absolute;
  top: -50vh;
  left: -25vw;
  background-color: #2E6ABE;
}

.AttitudeIndicator__down {
  height: 100vh;
  width: 150vw;
  position: absolute;
  top: 50vh;
  left: -25vw;
  background-color: #EF712A;
}
</style>
