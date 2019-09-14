// import Vue from 'vue'

const state = {
  clients: {},
  campaigns: {},
  selectedCampaigns: {},
  targetGroupValues: {},
  targetGroups: {},
  result: {}
}

const getters = {
  clients: state => {
    return Object.values(state.clients)
  },
  campaigns: state => Object.values(state.campaigns),
  selectedCampaigns: state => state.selectedCampaigns,
  targetGroupValues: state => state.targetGroupValues || {},
  targetGroupHeaders: state => (state.targetGroups || {}).header || [],
  targetGroupRows: state => (state.targetGroups || {}).rows || [],
  targetGroupProgress: state => (state.targetGroups || {}).progress || 0,
  resultHeaders: state => ((state.result || {}).resultList || {}).header || [],
  resultItems: state => ((state.result || {}).resultList || {}).rows || [],
  resultProgress: state => (state.result || {}).progress || 0
}

const actions = {
  setSelectedCampaigns (context, data) {
    context.commit('updateSelectedCampaigns', data)
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
  updateSelectedCampaigns (state, data) {
    state.selectedCampaigns = data
  },
  updateTargetGroupValues (state, data) {
    state.targetGroupValues = data
  },
  updateTargetGroupOverview (state, data) {
    let progress = 0
    state.targetGroups = data
    data.rows.map((row, index) => {
      row.id = index + '' + row.categories + '-' + row.targetgroup
      progress += row.targetgroup_percent
    })
    state.targetGroups.progress = progress / data.rows.length
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
