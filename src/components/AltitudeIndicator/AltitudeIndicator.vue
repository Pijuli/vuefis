<template>
  <div class="AltitudeIndicator absolute">
    <vertical-indicator
      :value="actualAltimeter"
      :scale="100"
      :see="6"
      :base-limit="0"
      :first-limit="1200"
      :second-limit="1200"
      :variance-limit="2"
      :variance-value="actualVario"
      variance-scale-show
      mirror
    />
  </div>
</template>

<script>
import VerticalIndicator from '@/components/shared/VerticalIndicator'

export default {
  name: 'AltitudeIndicator',
  components: {
    VerticalIndicator,
  },
  data() {
    return {
      actualAltimeter: 900,
      actualVario: 0,
    }
  },
  mounted () {
    this.interval = setInterval(this.simulateAltimeter, 125)
    this.interval = setInterval(this.simulateVario, 2000)
  },
  methods: {
    simulateAltimeter () {
      this.actualAltimeter = (this.actualAltimeter + 1)%1200
    },
    simulateVario () {
      let vario = 0
      vario = Math.floor(Math.random()*99) / 100
      vario *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
      this.actualVario = vario*2
    },
  },
}
</script>

<style lang="scss" scoped>
.AltitudeIndicator {
  height: 70vh;
  width: 20vh;
  right: 15px;
  top: 15vh;
}
</style>
