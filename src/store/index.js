import Vue from "vue";
import Vuex from "vuex";

import config from './modules/config'
import data from './modules/data'
import simulate from './modules/simulate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config,
    data,
    simulate,
  },
})
