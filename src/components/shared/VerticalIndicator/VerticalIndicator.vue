<template>
  <div class="VerticalIndicator w-full h-full overflow-hidden relative">
    <div class="VerticalIndicator__value absolute text-center rounded">
      {{value}}
    </div>
    <div
      class="VerticalIndicator__container h-full absolute flex flex-col-reverse"
      :style="{bottom:bottomPosition+'%'}"
    >
      <div 
        class="VerticalIndicator__stepContainer text-white flex items-center" 
        v-for="(givenNumber, index) in numberArray" 
        :key="index"
        :style="{minHeight: blockSize + '%'}"
      >
        <div class="h-full">
          <div class="VerticalIndicator__step" :class="getLimitColors(givenNumber)"/>
          <div class="VerticalIndicator__step" :class="getLimitColors(givenNumber)"/>
        </div>
        <div class="ml-1">
          <span v-if="givenNumber >= 0">
            {{givenNumber}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerticalIndicator',
  props: {
    value: {
      type: Number,
      required: true, 
    },
    scale: {
      type: Number,
      required: true,
    },
    see: {
      type: Number,
      required: true,
    },
    baseLimit: {
      type: Number,
      default: undefined,
    },
    firstLimit: {
      type: Number,
      default: undefined,
    },
    secondLimit: {
      type: Number,
      default: undefined,
    },
  },
  computed: {
    headingnth () {
      return Math.floor(this.value / this.scale) * this.scale
    },
    numberArray() {
      return [ ...Array(this.see + 2).keys() ].map(
        (i) => {
          let tmp = (this.headingnth - this.scale)
          return ((tmp - this.scale * 2) + i * this.scale)
        }
      ) 
    },
    bottomPosition () {
      return (this.blockSize * -0.5) - ((((this.value)%this.scale)/10) * this.blockSize) 
    },
    blockSize () {
      return 100 / this.see
    },
  },
  methods: {
    getLimitColors(givenNumber) {
      if (givenNumber <= this.baseLimit) return 'bg-white'
      else if (givenNumber <= this.firstLimit) return 'bg-green-500'
      else if (givenNumber <= this.secondLimit) return 'bg-yellow-500'
      else return 'bg-red-500'
    },
  },
}
</script>

<style lang="scss" scoped>
.VerticalIndicator__value {
  top: calc(50% - 15px);
  width: 60px;
  height: 30px;
  left: 12px;
  background-color: black;
  color: white;
  z-index: 1;
  border: 2px solid white;
  font-size: 25px;
  line-height: 26px;
}

.VerticalIndicator__step {
  margin-top: 2px;
  height: calc(50% - 2px);
  width: 10px;
}
</style>
