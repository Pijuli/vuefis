import store from '../../store';
import { DATA_NAMESPACE } from '@/store/store-types'

function simulate () {
  store.commit(`${DATA_NAMESPACE}/setAlt`, (store.state.data.alt+3) % 1200)
  store.commit(`${DATA_NAMESPACE}/setAs`, (store.state.data.as+1) % 120)
  if(store.state.data.pitch === 30) {
    store.commit(`${DATA_NAMESPACE}/setPitch`, -30)
  }
  store.commit(`${DATA_NAMESPACE}/setPitch`, store.state.data.pitch+0.5)
  if(store.state.data.roll === 30) {
    store.commit(`${DATA_NAMESPACE}/setRoll`, -30)
  }
  store.commit(`${DATA_NAMESPACE}/setRoll`, store.state.data.roll+0.5)
  store.commit(`${DATA_NAMESPACE}/setCompass`, (store.state.data.compass+1) % 360)
}

export default {
  namespaced: true,
  state: {
    enabled: false,
    interval: undefined,
  },
  actions: {
    updateSimulate({commit}, newState) {
      commit('setEnabled', newState)
    },
  },
  mutations: {
    ['setEnabled']: (state, newState) => {
      state.enabled = newState
      if(state.enabled) {
        state.interval = setInterval(() => {
          simulate()
        }, 100);
      }
      else clearTimeout(state.interval);
    },
  },
}
