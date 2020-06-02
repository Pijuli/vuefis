<template>
  <div class="SpeedIndicator absolute">
    <vertical-indicator
      :value="as"
      :scale="10"
      :see="6"
      :base-limit="20"
      :first-limit="50"
      :second-limit="70"
    />
  </div>
</template>

<script>
import { DATA_NAMESPACE } from '@/store/store-types'
import { mapState } from 'vuex'
import VerticalIndicator from '@/components/shared/VerticalIndicator'

export default {
  name: 'SpeedIndicator',
  components: {
    VerticalIndicator,
  },
  computed: {
    ...mapState(DATA_NAMESPACE, ['as']),
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
