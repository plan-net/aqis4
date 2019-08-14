import {
  FETCH_CLIENTS,
  SET_CLIENTS,
  TEST_REQUEST,

  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
} from '@/store/types'

import Vue from 'vue'
import { ClientsService } from '@/store/api/index.js'
/* import { clone } from 'core4ui/core4/helper.js'
import router from '@/router' */

const state = {
  client: {},
  all: [
    {
      '_id': '4130edb65adb11e98647d663bd873d93',
      'name': 'Client1',
      'etag': '76c22390-d50b-4dad-9e73-6cf365a09daa',
      'timestamp': '2019-01-21T10:02:51.521000',
      'author': 'eha'
    },
    {
      '_id': '4130edb65adb11e98647d663bd871548',
      'name': 'Client2',
      'etag': '76c22390-d50b-4dad-9e73-6cf365a09daa',
      'timestamp': '2019-04-30T16:02:51.521000',
      'author': 'lst'
    },
    {
      '_id': '4130edb65adb11e98647d663xxxx4587',
      'name': 'Client3',
      'etag': '76c22390-d50b-4dad-9e73-6cf365a09daa',
      'timestamp': '2019-04-30T17:20:51.521000',
      'author': 'wic'
    }
  ],
  socket: {
    isConnected: false,
    message: '',
    reconnectError: false
  }
}

const actions = {
  async [FETCH_CLIENTS] (context) {
    const clients = await ClientsService.getAll()
    context.commit(SET_CLIENTS, clients)
    return clients
  },

  async [TEST_REQUEST] (context, id) {
    let name = id ? context.state.all.find(el => el._id === id).name : null

    const greeting = await ClientsService.testRequest(name)
    return greeting
  }
}

const mutations = {
  [SET_CLIENTS] (state, clients) {
    state.all = clients
  },
  [SOCKET_ONOPEN] (state, event) {
    Vue.prototype.$socket = event.currentTarget
    Vue.prototype.$socket.sendObj({ 'type': 'open' })

    state.socket.isConnected = true
    state.socket.reconnectError = false
  },
  [SOCKET_ONCLOSE] (state) {},
  [SOCKET_ONERROR] (state, event) {},
  [SOCKET_ONMESSAGE] (state, message) {},
  [SOCKET_RECONNECT] (state, count) {},
  [SOCKET_RECONNECT_ERROR] (state) {}
}

const getters = {
  clients (state) {
    return state.all
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
