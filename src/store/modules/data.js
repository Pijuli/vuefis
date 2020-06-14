export default {
  namespaced: true,
  state: {
    pitch: 0, //Pitch Degrees
    roll: 0, //Roll Degrees
    yaw: 0, //Yaw Degrees
    // pitchrate: 0, //Pitch Rate feet/min unused
    // rollrate: 0, //Roll Rate feet/min unused
    // yawrate: 0, //Yaw Rate feet/min unused
    // slip: 0, //Slip unknown unused
    compass: 0, //Heading degrees
    // gs: 0, //Ground Speed unused
    as: 0, //Air Speed mph
    // tas: 0, //True Air Speed unused
    alt: 0, //Altitude feet
    vario: 0, //Altitude Variometer
    // temp: 0, //Temperature unused
    // bar: 0, //Barometer mmHg unused
  },
  actions: {
  },
  mutations: {
    ['setPitch']: (state, newPitch) => {
      state.pitch = newPitch
    },
    ['setRoll']: (state, newRoll) => {
      state.roll = newRoll
    },
    ['setYaw']: (state, newYaw) => {
      state.yaw = newYaw
    },
    ['setCompass']: (state, newCompass) => {
      state.compass = newCompass
    },
    ['setAlt']: (state, newAlt) => {
      state.alt = newAlt
    },
    ['setVario']: (state, newVario) => {
      state.vario = newVario
    },
    ['setAs']: (state, newAs) => {
      state.as = newAs
    },
  },
}
