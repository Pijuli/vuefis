<template>
  <div class="AltitudeIndicator absolute">
    <vertical-indicator
      :value="alt"
      :scale="100"
      :see="6"
      :base-limit="altitudeBaseLimit"
      :first-limit="altitudeFirstLimit"
      :second-limit="altitudeSecondLimit"
      :variance-limit="2"
      :variance-value="vario"
      variance-show
      variance-scale-show
      mirror
    />
  </div>
</template>

<script>
import { DATA_NAMESPACE, CONFIG_NAMESPACE } from '@/store/store-types'
import { mapState } from 'vuex'
import VerticalIndicator from '@/components/shared/VerticalIndicator'

export default {
  name: 'AltitudeIndicator',
  components: {
    VerticalIndicator,
  },
  computed: {
    ...mapState(DATA_NAMESPACE, ['alt', 'vario']),
    ...mapState(CONFIG_NAMESPACE, ['altitudeBaseLimit', 'altitudeFirstLimit', 'altitudeSecondLimit']),
  },
}
</script>

<style lang="scss" scoped>
.AltitudeIndicator {
  height: 70vh;
  width: 20vh;
  right: 15px;
  top: 15vh;
}
</style>
