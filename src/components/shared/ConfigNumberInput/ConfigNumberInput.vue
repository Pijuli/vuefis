<template>
  <div class="ConfigNumberInput py-2 flex items-center">
    <div class="w-1/3">
      {{label}}
    </div>
    <div
      class="ConfigNumberInput__button mr-2"
      @click="modify(-10)"
    >
      -10
    </div>
    <div
      class="ConfigNumberInput__button mr-2"
      @click="modify(-1)"
    >
      -1
    </div>
    <input
      class="ConfigNumberInput__input" type="number" v-model="inputvalue">
    <div
      class="ConfigNumberInput__button ml-2"
      @click="modify(+1)"
    >
      +1
    </div>
    <div
      class="ConfigNumberInput__button ml-2"
      @click="modify(+10)"
    >
      +10
    </div>
    <span class="pl-3">mph</span>
  </div>
</template>

<script>
import { CONFIG_NAMESPACE } from '@/store/store-types'

export default {
  name: 'ConfigNumberInput',
  props: {
    stateName: {
      type: String,
      default: 'altitudeBaseLimit',
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    inputvalue: {
      get () {
        return this.$store.state[CONFIG_NAMESPACE][this.stateName]
      },
      set (value) {
        this.$store.dispatch(`${CONFIG_NAMESPACE}/setConfigByname`, [this.stateName, Number(value)])
      },
    },
  },
  methods: {
    modify(modifier) {
      this.inputvalue = this.inputvalue + modifier
    },
  },
}
</script>

<style lang="scss" scoped>
.ConfigNumberInput__input {
  @apply text-center;
  width: 100px;
}

.ConfigNumberInput__button {
  @apply bg-gray-700 text-center text-white text-xl;
  width: 40px;
}
</style>
