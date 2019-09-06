import Vue from 'vue'
import {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
} from '@/store/types'

const state = {
  socket: {
    isConnected: false,
    message: '',
    reconnectError: false
  }
}

const getters = {
}

const actions = {
}

const mutations = {
  [SOCKET_ONOPEN] (state, event) {
    Vue.prototype.$socket.sendObj({
      'X-Request-ID': new Date().getTime(),
      method: 'getClient'
    })
    state.socket.isConnected = true
    state.socket.reconnectError = false
  },
  [SOCKET_ONCLOSE] (state) {},
  [SOCKET_ONERROR] (state, event) {},
  [SOCKET_ONMESSAGE] (state, message) {
    if (message.connectionId) {
      window.WS_CONNECTION_ID = message.connectionId
    }
    switch (message.method) {
      case 'getClient':
        this.commit('dashboard/updateClients', message.data.clientList)
        break
      case 'getCampaign':
        this.commit('dashboard/updateCampaigns', message.data.campaignList)
        break
      case 'subscribeTargetGroup':
        this.commit('dashboard/updateTargetGroup', message.data)
        break
      default:
    }
  },
  [SOCKET_RECONNECT] (state, count) {},
  [SOCKET_RECONNECT_ERROR] (state) {}
}

export default {
  state,
  actions,
  mutations,
  getters
}
