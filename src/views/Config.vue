<template>
  <div>
    <h1>This is a config page</h1>
    <router-link to="/">EFIS</router-link>
    <br>
    Simulate: |
    <label class="switch">
      <input type="checkbox" v-model="simulateEnabled">
      <span class="slider round"/>
    </label>
    <div @click="closeApp">
      closeApp
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SIMULATE_NAMESPACE } from '@/store/store-types'

export default {
  name: 'Config',
  computed: {
    ...mapState(SIMULATE_NAMESPACE, ['enabled']),
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
