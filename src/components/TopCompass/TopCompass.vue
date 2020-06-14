<template>
  <div class="TopCompass absolute">
    <div class="TopCompass__heading absolute">
      <value-pointer-box :value="compass" direction="down"/>
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
import { DATA_NAMESPACE } from '@/store/store-types'
import { mapState } from 'vuex'
import ValuePointerBox from '@/components/shared/ValuePointerBox'

export default {
  name: 'TopCompass',
  components: {
    ValuePointerBox,
  },
  computed: {
    ...mapState(DATA_NAMESPACE, ['compass']),
    headingtenth () {
      return Math.floor(this.compass / 10) * 10
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
      return -9.09 - ((this.compass)%10 * 0.909)
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
  z-index: 1;
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
