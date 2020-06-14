<template>
  <div 
    class="VerticalIndicator w-full h-full overflow-hidden relative"
    :class="{ VerticalIndicator__mirror: mirror }"
  >
    <!-- Variance meter -->
    <div
      v-if="varianceShow"
      class="VerticalIndicator__variance absolute flex flex-col"
    >
      <div class="h-full w-full relative">
        <!-- Bars -->
        <div 
          class="VerticalIndicator__varianceTop w-full absolute bg-green-400"
          :style="{height: getVarianceTop+'%'}"
        />
        <div 
          class="VerticalIndicator__varianceBottom w-full absolute bg-red-400"
          :style="{height: getVarianceBottom+'%'}"
        />
        <!-- scale -->
        <div
          v-if="varianceScaleShow"
          class="text-white leading-tight"
        >
          <div class="absolute" style="top:calc(0% - 10px)">
            {{varianceLimit}}
          </div>
          <div class="absolute" style="top:calc(25% - 10px)">
            {{varianceLimit/2}}
          </div>
          <div class="absolute" style="top:calc(50% - 10px)">
            0
          </div>
          <div class="absolute" style="top:calc(75% - 10px)">
            {{-varianceLimit/2}}
          </div>
          <div class="absolute" style="top:calc(100% - 10px)">
            {{-varianceLimit}}
          </div>
        </div>
      </div>
    </div>

    <!-- Vertical scroll -->
    <div class="VerticalIndicator__value absolute text-center rounded">
      {{value}}
    </div>
    <div
      class="VerticalIndicator__container h-full absolute flex flex-col-reverse"
      :style="{bottom:bottomPosition+'%'}"
    >
      <div 
        class="VerticalIndicator__stepContainer text-white flex relative" 
        v-for="(givenNumber, index) in numberArray" 
        :key="index"
        :style="{minHeight: blockSize + '%'}"
      >
        <div class="h-full">
          <div
            class="VerticalIndicator__step" 
            :class="getLimitColors(givenNumber)"
          />
          <div 
            class="VerticalIndicator__step" 
            :class="getLimitColors(givenNumber)"
          />
        </div>
        <div class="VerticalIndicator__stepNumber">
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
    see: { //TODO Vertical displacement is not properly calculated if != 6
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
    varianceShow: {
      type: Boolean,
      default: false,
    },
    varianceLimit: {
      type: Number,
      default: 0,
    },
    varianceValue: {
      type: Number,
      default: 0,
    },
    varianceScaleShow: {
      type: Boolean,
      default: false,
    },
    mirror: {
      type: Boolean,
      default: false,
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
      return -((((this.value)%this.scale)/this.scale) * this.blockSize) 
    },
    blockSize () {
      return 100 / this.see
    },
    getVarianceTop () {
      if (this.varianceValue > 0) return this.varianceValue / this.varianceLimit * 50
      else return 0 
    },
    getVarianceBottom () {
      if (this.varianceValue < 0) return -this.varianceValue / this.varianceLimit * 50
      else return 0 
    },
  },
  methods: {
    getLimitColors(givenNumber) {
      if (givenNumber < 0) return 'bg-transparent'
      else if (givenNumber < this.baseLimit) return 'bg-white'
      else if (givenNumber < this.firstLimit) return 'bg-green-500'
      else if (givenNumber < this.secondLimit) return 'bg-yellow-500'
      else return 'bg-red-500'
    },
  },
}
</script>

<style lang="scss" scoped>
.VerticalIndicator__variance {
  height: 80%;
  width: 10px;
  left: 2px;
  top: 10%
}

.VerticalIndicator__varianceTop {
  bottom: 50%;
  transition: height 0.30s ease-out;
}

.VerticalIndicator__varianceBottom {
  top: 50%;
  transition: height 0.30s ease-out;
}

.VerticalIndicator__container {
  left: 18px;
}

.VerticalIndicator__stepNumber {
  @apply absolute;
  bottom: -12px;
  left: 14px;
}

.VerticalIndicator__value {
  top: calc(50% - 15px);
  width: 60px;
  height: 30px;
  left: 30px;
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

.VerticalIndicator__mirror {

  .VerticalIndicator__variance {
    left: auto;
    right: 2px;
  }

  .VerticalIndicator__container {
    left: auto;
    right: 18px;
  }

  .VerticalIndicator__stepContainer {
    @apply flex-row-reverse;
  }

  .VerticalIndicator__stepNumber {
    @apply ml-0 mr-1;
  }

  .VerticalIndicator__value {
    left: auto;
    right: 30px;
  }

  .VerticalIndicator__stepNumber {
    left: auto;
    right: 12px;
  }
}
</style>
