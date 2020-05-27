<template>
  <div class="AltimeterIndicator absolute">
    <vertical-indicator :value="actualAltimeter" :scale="10" :see="6" :base-limit="20" :first-limit="50" :second-limit="70"/>
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
    }
  },
  mounted () {
    this.interval = setInterval(this.simulateAltimeter, 125)
  },
  methods: {
    simulateAltimeter () {
      this.actualAltimeter = (this.actualAltimeter + 1)%1000
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
