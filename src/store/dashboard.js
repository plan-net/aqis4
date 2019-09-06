import Vue from 'vue'

const state = {
  clients: {},
  campaigns: {},
  targetGroups: {},
  result: {
    progress: 0.01,
    sort: 1,
    sort_by: 'campaign',
    page: 0, // current page (starts counting with ``0``)
    per_page: 5, // the number of elements per page
    count: 5, // the number of records in current page
    page_count: 4, // the total number of pages
    total_count: 18, // the total number of records
    resultList: {
      header: [
        {
          text: 'Campaign',
          sortable: true,
          value: 'campaign'
        },
        {
          text: 'Start',
          sortable: true,
          value: 'start'
        },
        {
          text: 'End',
          sortable: true,
          value: 'end'
        },
        {
          text: '#Impressions',
          sortable: true,
          value: 'impressions'
        },
        {
          text: '#Panel list',
          sortable: true,
          value: 'panellist'
        },
        {
          text: '#Est. Value',
          sortable: true,
          value: 'estvalue'
        },
        {
          text: 'ZE',
          // sortable: true, // is it possible to sort this column?
          value: 'ziel'
        }
      ],
      rows: [
        {
          id: '11e98647adb11e98647d663bd873d91',
          campaign: 'camp1',
          start: '2019-10-10',
          end: '2019-11-11',
          impressions: 10,
          panellist: 101,
          estvalue: 12,
          ziel: null
        },
        {
          id: '11e98647adb11e98647d663bd871542',
          campaign: 'camp2',
          start: '2018-12-01',
          end: '2019-03-30',
          impressions: 1,
          panellist: 2,
          estvalue: 4,
          ziel: null
        },
        {
          id: '11e98647adb11e98647d663bd873b53',
          campaign: 'camp3',
          start: '2019-05-05',
          end: '2019-06-01',
          impressions: 15,
          panellist: 274,
          estvalue: 456,
          ziel: null
        },
        {
          id: '11e98647adb11e98647d663bd873k74',
          campaign: 'camp4',
          start: '2019-06-06',
          end: '2019-07-07',
          impressions: 2,
          panellist: 23,
          estvalue: 76,
          ziel: null
        },
        {
          id: '11e98647adb11e98647d663bd873r35',
          campaign: 'camp5',
          start: '2019-08-08',
          end: '2019-09-09',
          impressions: 83,
          panellist: 987,
          estvalue: 6789,
          ziel: null
        }
      ]
    }
  }
}

const getters = {
  clients: state => {
    return Object.values(state.clients)
  },
  campaigns: state => Object.values(state.campaigns),
  targetGroupHeaders: state => (state.targetGroups.targetGroupList || {}).header || [],
  targetGroupItems: state => (state.targetGroups.targetGroupList || {}).rows || [],
  targetGroupProgress: state => (state.targetGroups.progress || 0) * 100,
  resultHeaders: state => state.result.resultList.header,
  resultItems: state => state.result.resultList.rows,
  resultProgress: state => state.result.progress * 100
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
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
