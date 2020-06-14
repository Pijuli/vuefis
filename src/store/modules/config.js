export default {
  namespaced: true,
  state: {
    altitudeBaseLimit: 0, //Altitude White Limit
    altitudeFirstLimit: 800, //Altitude Green Limit
    altitudeSecondLimit: 1200, //Altitude Yellow Limit
    altitudeSee: 6,
    altitudeScale: 100,
    speedBaseLimit: 50, //Speed White Limit
    speedFirstLimit: 110, //Speed Green Limit
    speedSecondLimit: 130, //Speed Yellow Limit
    speedSee: 6,
    speedScale: 10,
  },
  actions: {
    setConfigByname({commit}, [field, value]) {
      commit('setValue', [field, value])
    },
  },
  mutations: {
    setValue (state, [field, value]) {
      state[field] = value
    },  
  },
}
