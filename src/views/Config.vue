<template>
  <div class="p-3 bg-gray-300 min-h-full">
    <div class="ConfigHeader flex justify-between">
      <router-link class="text-green-500 text-xl font-bold" to="/">Back to VuEFIS</router-link>
      <div class="text-red-500 text-xl" @click="closeApp">
        Close VuEFIS
      </div>
    </div>
    <divider />
    <h1 class="text-center">Simulation</h1>
    <div>
      Simulate
      <label class="switch">
        <input type="checkbox" v-model="simulateEnabled">
        <span class="slider round"/>
      </label>
    </div>
    <divider />
    <h1 class="text-center">Speed</h1>
    <div>
      <config-number-input label="Base Limit" state-name="speedBaseLimit"/>
      <config-number-input label="First Limit" state-name="speedFirstLimit"/>
      <config-number-input label="Second Limit" state-name="speedSecondLimit"/>
    </div>
    <divider />
    <h1 class="text-center">Altitude</h1>
    <div>
      <config-number-input label="Base Limit" state-name="altitudeBaseLimit"/>
      <config-number-input label="First Limit" state-name="altitudeFirstLimit"/>
      <config-number-input label="Second Limit" state-name="altitudeSecondLimit"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SIMULATE_NAMESPACE, CONFIG_NAMESPACE } from '@/store/store-types'
import ConfigNumberInput from '@/components/shared/ConfigNumberInput'
import Divider from '@/components/shared/Divider'

export default {
  name: 'Config',
  components: {
    ConfigNumberInput,
    Divider,
  },
  computed: {
    ...mapState(SIMULATE_NAMESPACE, ['enabled']),
    ...mapState(CONFIG_NAMESPACE, [
      'altitudeBaseLimit','altitudeFirstLimit','altitudeSecondLimit',
      'speedBaseLimit','speedFirstLimit','speedSecondLimit',
    ]),
    simulateEnabled: {
      get () {
        return this.enabled
      },
      set (value) {
        this.$store.dispatch(`${SIMULATE_NAMESPACE}/updateSimulate`, value)
      },
    },
  },
  methods: {
    closeApp() {
      window.close()
    },
  },
}
</script>
