import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import clients from './clients'
import dashboard from './dashboard'

const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []

Vue.use(Vuex)

export default new Vuex.Store({
  plugins,
  strict: true, // debug,
  modules: {
    clients,
    dashboard
  }
})
