<template>
  <div class="SlipIndicator absolute rounded-full bg-black bg-opacity-25">
    <div class="SlipIndicator__container relative w-full h-full">
      <div class="SlipIndicator__ball bg-white rounded-full absolute"/>
      <div class="SlipIndicator__limits absolute"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlipIndicator',
}
</script>

<style lang="scss" scoped>
.SlipIndicator {
  height: calc(4vh + 6px);
  width: 20vw;
  bottom: 2vh;
  left: calc(50% - 10vw);
  border: 1px solid white;
}

.SlipIndicator__ball {
  height: 4vh;
  width: 4vh;
  top: 2px;
  left: calc(50% - 2vh);
}

.SlipIndicator__limits {
  width: 7vh;
  height: 4vh;
  top: 2px;
  left: calc(50% - 3.5vh);
  border-left: 3px solid white;
  border-right: 3px solid white;
}
</style>
