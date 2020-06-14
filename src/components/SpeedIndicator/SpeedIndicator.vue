<template>
  <div class="SpeedIndicator absolute">
    <vertical-indicator
      :value="as"
      :scale="speedScale"
      :see="speedSee"
      :base-limit="speedBaseLimit"
      :first-limit="speedFirstLimit"
      :second-limit="speedSecondLimit"
    />
  </div>
</template>

<script>
import { DATA_NAMESPACE, CONFIG_NAMESPACE } from '@/store/store-types'
import { mapState } from 'vuex'
import VerticalIndicator from '@/components/shared/VerticalIndicator'

export default {
  name: 'SpeedIndicator',
  components: {
    VerticalIndicator,
  },
  computed: {
    ...mapState(DATA_NAMESPACE, ['as']),
    ...mapState(CONFIG_NAMESPACE, [
      'speedSee', 'speedScale',
      'speedBaseLimit', 'speedFirstLimit', 'speedSecondLimit',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.SpeedIndicator {
  height: 70vh;
  width: 20vh;
  left: 15px;
  top: 15vh;
}
</style>
