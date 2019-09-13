import Vue from 'vue'
import {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONSEND,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
} from '@/store/types'

const state = {
  progress: false,
  socket: {
    isConnected: false,
    message: '',
    reconnectError: false
  }
}

const getters = {
  progress: state => state.progress
}

const actions = {
  [SOCKET_ONSEND] (context, data) {
    context.commit(SOCKET_ONSEND, data)
  }
}

const mutations = {
  [SOCKET_ONOPEN] (state, event) {
    state.progress = true
    Vue.prototype.$socket.sendObj({
      'X-Request-ID': new Date().getTime(),
      method: 'getClient'
    })
    state.socket.isConnected = true
    state.socket.reconnectError = false
  },
  [SOCKET_ONSEND] (state, data) {
    state.progress = true
    Vue.prototype.$socket.sendObj({
      'X-Request-ID': new Date().getTime(),
      method: data.method,
      data
    })
  },
  [SOCKET_ONCLOSE] (state) {
    state.progress = false
    state.socket.isConnected = false
  },
  [SOCKET_ONERROR] (state, event) {
    state.progress = false
  },
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
      case 'getTargetGroupValues':
        this.commit('dashboard/updateTargetGroupValues', message.data)
        break
      case 'getTargetGroupOverview':
        this.commit('dashboard/updateTargetGroupOverview', message.data)
        break
      case 'subscribeCampaignResult':
        this.commit('dashboard/updateResults', message.data)
        break
      default:
    }
    state.progress = false
  },
  [SOCKET_RECONNECT] (state, count) {},
  [SOCKET_RECONNECT_ERROR] (state) {
    state.socket.reconnectError = true
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
