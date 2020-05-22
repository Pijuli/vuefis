<template>
  <div 
    class="AttitudeLines absolute"
    :class="classes"
    :style="{ bottom: position + '%'}"
  >
    <div class="AttitudeLines__number text-white text-xs flex justify-between">
      <span>{{number}}</span>
      <span>{{number}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AttitudeLines',
  props: {
    length: {
      type: String,
      validator: v => ['full', 'quarter', 'eight'].includes(v),
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    number: {
      type: Number,
      default: undefined,
    },
  },
  computed: {
    classes() {
      return [`AttitudeLines--${this.length}`] 
    },
  },
}
</script>

<style lang="scss" scoped>
.AttitudeLines {
  height: 2px;
  @apply bg-gray-200;
}

.AttitudeLines--full {
  width: 100vw;
}

.AttitudeLines--quarter {
  left: calc(50% - 12.5vw);
  width: 25vw;
}

.AttitudeLines--eight {
  left: calc(50% - 6vw);
  width: 12vw;
}

.AttitudeLines__number {

}
</style>
