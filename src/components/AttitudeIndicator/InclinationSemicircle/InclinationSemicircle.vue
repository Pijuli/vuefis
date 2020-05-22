<template>
  <div class="InclinationSemicircle">
    
    <div class="clock">
      <div class="clock__axis"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
      <section class="clock__indicator"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InclinationSemicircle',
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.InclinationSemicircle {
  top: 32px;
  position: absolute;
  left: calc(50% - 45vh);
}
$size: 90vh;
$white: #f4eed7;
$feature : white;


.clock {
  height: $size;
  width: $size;
  &__indicator {
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    background: $white;
    transform-origin: bottom center;
    border-radius: 1px;
  }
  &__indicator {
    height: #{($size / 2) - 2};
    border-top: 2px solid $feature;
    background: none;
  }
  &__indicator:nth-of-type(3n) {
    opacity: 1;
    border-top: 14px solid $white;
  }
}

@for $i from 1 through 36 {
  section:nth-of-type(#{$i}) {
    transform: rotateZ(calc(10deg * #{$i}));
  }
}

</style>
