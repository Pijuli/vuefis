<template>
  <div class="TopCompass absolute">
    <div class="TopCompass__heading absolute text-center rounded">
      {{actualHeading}}
    </div>
    <div class="TopCompass__degreeContainer absolute flex" :style="{left:leftPosition+'vw'}">
      <div class="TopCompass__10deg text-white" v-for="(degrees, index) in visibleDegrees" :key="index">
        <div class="flex flex-col w-full">
          <div class="text-center">
            {{degrees}}
          </div>
          <div class="flex w-full">
            <div class="TopCompass__lineBig w-1/2"/>
            <div class="TopCompass__lineSmall w-1/2"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopCompass',
  data() {
    return {
      actualHeading: 0,
    }
  },
  computed: {
    headingtenth () {
      return Math.floor(this.actualHeading / 10) * 10
    },
    visibleDegrees() {
      return [ ...Array(13).keys() ].map(
        (i) => {
          let tmp = (this.headingtenth-60)
          if (tmp < 0) {
            tmp += 360
          }
          const degree = (tmp + i * 10)%360
          if (degree == 0) return 'N'
          else if (degree == 90) return 'E' 
          else if(degree == 180) return 'S' 
          else if(degree == 270) return 'W' 
          return degree
        }
      ) 
    },
    leftPosition () {
      return -9.09 - ((this.actualHeading)%10 * 0.909)
    },
  },
  mounted () {
    this.interval = setInterval(this.simulateHeading, 125)
  },
  methods: {
    simulateHeading () {
      this.actualHeading = (this.actualHeading + 3)%360
    },
  },
}
</script>

<style lang="scss" scoped>
.TopCompass {
  top: 0;
  width: 100vw;
  height: 10vh;
  overflow: hidden;
}

.TopCompass__heading {
  top: 2px;
  width: 60px;
  left: calc(50vw - 30px);
  background-color: black;
  color: white;
  z-index: 1;
  border: 2px solid white;
  font-size: 25px;
  height: auto;
  line-height: 26px;
}

.TopCompass__degreeContainer {
  top: 0;
  left: -9.09vw;
}

.TopCompass__10deg {
  width: 9.09vw;
}

.TopCompass__lineBig {
  border-right: 2px solid white;
  height: 15px;
}

.TopCompass__lineSmall {
  border-right: 1px solid white;
  height: 5px;
}
</style>
