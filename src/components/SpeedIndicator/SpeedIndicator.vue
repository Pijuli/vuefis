<template>
  <div class="SpeedIndicator absolute">
    <vertical-indicator
      :value="actualSpeedometer"
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
  name: 'SpeedIndicator',
  components: {
    VerticalIndicator,
  },
  data() {
    return {
      actualSpeedometer: 0,
      actualVario: 0,
    }
  },
  mounted () {
    this.interval = setInterval(this.simulateSpeedometer, 1000)
    this.interval = setInterval(this.simulateVario, 2000)
  },
  methods: {
    simulateSpeedometer () {
      this.actualSpeedometer = (this.actualSpeedometer + 1)%1000
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
.SpeedIndicator {
  height: 70vh;
  width: 20vh;
  left: 15px;
  top: 15vh;
}
</style>
