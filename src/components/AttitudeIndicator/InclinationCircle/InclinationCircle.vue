<template>
  <div class="InclinationCircle">
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
}
</script>

<style lang="scss" scoped>
.InclinationCircle {
  top: 57px;
  position: absolute;
  left: calc(50% - 40vh);
  animation: spin 6s cubic-bezier(.5, 0, .5, 1) infinite;
  @keyframes spin {
    12% { transform: rotate(30deg); }
    25% { transform: rotate(0deg); }
    37% { transform: rotate(-30deg); }
    50% { transform: rotate(0deg); }
  }
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
