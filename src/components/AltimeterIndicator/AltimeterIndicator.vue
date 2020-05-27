<template>
  <div class="AltimeterIndicator absolute">
    <vertical-indicator
      :value="actualAltimeter"
      :scale="10"
      :see="6"
      :base-limit="20"
      :first-limit="50"
      :second-limit="70"
      :variance-limit="1"
      :variance-value="actualVario"
    />
  </div>
</template>

<script>
import VerticalIndicator from '@/components/shared/VerticalIndicator'

export default {
  name: 'AltimeterIndicator',
  components: {
    VerticalIndicator,
  },
  data() {
    return {
      actualAltimeter: 0,
      actualVario: 0,
    }
  },
  mounted () {
    this.interval = setInterval(this.simulateAltimeter, 1000)
    this.interval = setInterval(this.simulateVario, 2000)
  },
  methods: {
    simulateAltimeter () {
      this.actualAltimeter = (this.actualAltimeter + 1)%1000
    },
    simulateVario () {
      let vario = 0
      vario = Math.floor(Math.random()*99) / 100
      vario *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
      this.actualVario = vario
    },
  },
}
</script>

<style lang="scss" scoped>
.AltimeterIndicator {
  height: 70vh;
  width: 20vh;
  left: 15px;
  top: 15vh;
}
</style>
