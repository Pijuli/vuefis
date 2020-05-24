<template>
  <div class="StaticMarkers absolute flex flex-col items-center justify-between">
    <div class="StaticMarkers__inclination-ball rounded-full bg-white"/>
    <div class="StaticMarkers__horizon bg-white rounded-full"/>
  </div>
</template>

<script>
export default {
  name: 'StaticMarkers',
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.StaticMarkers {
  width: 20vw;
  height: 35vh;
  bottom: calc(50% - 3px);
  left: calc(50% - 10vw);
}

.StaticMarkers__inclination-ball {
  width: 10px;
  height: 10px;
  border-radius: 50%
}

.StaticMarkers__horizon {
  width: 20vw;
  height: 6px;
}
</style>
