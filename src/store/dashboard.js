const state = {
  clients: {
    '1234': {
      id: '1234',
      name: 'BMW'
    },
    '4567': {
      id: '4567',
      name: 'Audi'
    },
    '7890': {
      id: '7890',
      name: 'Ford'
    },
    '5689': {
      id: '5689',
      name: 'Volkswagen'
    },
    '3467': {
      id: '3467',
      name: 'Lamborghini'
    },
    '4365': {
      id: '4365',
      name: 'Opel'
    }
  },
  campaigns: {
    '12341': {
      id: '12341',
      name: 'BMW November',
      start: '2019-11-01',
      end: '2019-11-30',
      publish_id: 567890
    },
    '12342': {
      id: '12342',
      name: 'BMW December',
      start: '2019-12-01',
      end: '2019-12-30',
      publish_id: 567891
    },
    '12343': {
      id: '12343',
      name: 'BMW February',
      start: '2020-01-01',
      end: '2020-01-29',
      publish_id: 567892
    },
    '56891': {
      id: '56891',
      name: 'Volkswagen July',
      start: '2019-07-10',
      end: '2019-07-20',
      publish_id: 983923
    },
    '34671': {
      id: '34671',
      name: 'Lamborghini September',
      start: '2018-09-10',
      end: '2018-09-20',
      publish_id: 103053
    }
  },
  targetGroups: {
    progress: 0.02,
    sort: 1,
    sort_by: 'targetgroup',
    page: 1, // current page (starts counting with ``0``)
    per_page: 5, // the number of elements per page
    count: 5, // the number of records in current page
    page_count: 21, // the total number of pages
    total_count: 103, // the total number of records
    targetGroupList: {
      header: [
        {
          text: 'Targetgroup',
          sortable: true,
          value: 'targetgroup'
        },
        {
          text: '#Compaigns',
          sortable: true,
          value: 'campaigns'
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
          text: 'ZE',
          // sortable: true, // is it possible to sort this column?
          value: 'ziel'
        }
      ],
      rows: [
        {
          id: '4130edb65adb11e98647d663bd873d91',
          targetgroup: 'tg1',
          campaigns: 3,
          start: '2019-10-10',
          end: '2019-11-11',
          ziel: null
        },
        {
          id: '4130edb65adb11e98647d663bd871542',
          targetgroup: 'tg2',
          campaigns: 10,
          start: '2018-12-01',
          end: '2019-03-30',
          ziel: null
        },
        {
          id: '4130edb65adb11e98647d663bd873b53',
          targetgroup: 'tg3',
          campaigns: 1,
          start: '2019-05-05',
          end: '2019-06-01',
          ziel: null
        },
        {
          id: '4130edb65adb11e98647d663bd873k74',
          targetgroup: 'tg4',
          campaigns: 15,
          start: '2019-06-06',
          end: '2019-07-07',
          ziel: null
        },
        {
          id: '4130edb65adb11e98647d663bd873r35',
          targetgroup: 'tg5',
          campaigns: 2,
          start: '2019-08-08',
          end: '2019-09-09',
          ziel: null
        }
      ]
    }
  },
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
  targetGroupHeaders: state => state.targetGroups.targetGroupList.header,
  targetGroupItems: state => state.targetGroups.targetGroupList.rows,
  targetGroupProgress: state => state.targetGroups.progress * 100,
  resultHeaders: state => state.result.resultList.header,
  resultItems: state => state.result.resultList.rows,
  resultProgress: state => state.result.progress * 100
}

const actions = {
}

const mutations = {
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
