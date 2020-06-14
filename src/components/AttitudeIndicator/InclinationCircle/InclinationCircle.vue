<template>
  <div
    class="InclinationCircle"
    :style="getRoll"
  >
    <div class="InclinationCircle__circle">
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
      <section class="InclinationCircle__circle__indicator"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InclinationCircle',
  props: {
    roll: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getRoll() {
      return {transform: `rotate(${this.roll}deg)`}
    },
  },
}
</script>

<style lang="scss" scoped>
.InclinationCircle {
  top: 11.9vh;
  position: absolute;
  left: calc(50% - 40vh);
  // transition: transform 0.2s linear;
  // will-change: transform;
}
$size: 80vh;
$white: #f4eed7;
$feature : white;


.InclinationCircle__circle {
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
