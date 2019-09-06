import Vue from 'vue'

const state = {
  clients: {},
  campaigns: {},
  targetGroups: {},
  result: {}
}

const getters = {
  clients: state => {
    return Object.values(state.clients)
  },
  campaigns: state => Object.values(state.campaigns),
  targetGroupHeaders: state => (state.targetGroups.targetGroupList || {}).header || [],
  targetGroupItems: state => (state.targetGroups.targetGroupList || {}).rows || [],
  targetGroupProgress: state => (state.targetGroups.progress || 0) * 100,
  resultHeaders: state => (state.result.resultList || {}).header || [],
  resultItems: state => (state.result.resultList || {}).rows || [],
  resultProgress: state => (state.result.progress || 0) * 100
}

const actions = {
  getCampaign (context, data) {
    Vue.prototype.$socket.sendObj({
      'X-Request-ID': new Date().getTime(),
      method: 'getCampaign',
      data: {
        clientIds: data.clientIds,
        start: data.start,
        end: data.end
      }
    })
  },
  subscribeTargetGroup (context, data) {
    Vue.prototype.$socket.sendObj({
      'X-Request-ID': new Date().getTime(),
      method: 'subscribeTargetGroup',
      data
    })
  },
  subscribeCampaignResult (context, data) {
    Vue.prototype.$socket.sendObj({
      'X-Request-ID': new Date().getTime(),
      method: 'subscribeCampaignResult',
      data
    })
  }
}

const mutations = {
  updateClients (state, clientList) {
    state.clients = clientList.reduce((dict, current) => {
      dict[current['client_id']] = {
        id: current['client_id'],
        name: current['client_name']
      }

      return dict
    }, {})
  },
  updateCampaigns (state, campaignList) {
    state.campaigns = campaignList.reduce((dict, current) => {
      dict[current['campaign_id']] = {
        id: current['campaign_id'],
        name: current['campaign_name']
      }

      return dict
    }, {})
  },
  updateTargetGroup (context, data) {
    state.targetGroups = data
  },
  updateResults (context, data) {
    state.result = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
