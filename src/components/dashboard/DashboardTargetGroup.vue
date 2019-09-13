<template>
  <div>
    <fieldset class="pa-3" v-if="details">
      <legend>
        Step 3
      </legend>
      <v-layout align-space-between justify-space-between row wrap>
        <v-flex xs12 sm5>
          <v-layout row wrap justify-space-between align-center>
            <v-flex>
              <v-subheader class="pa-0">Age from _</v-subheader>
              <v-autocomplete
                v-model="ageMin"
                :items="ageMinList"
                :value="ageMin"
                class="black--text"
                :multiple="targetGroupValues._age ? targetGroupValues._age.multiple_selection : false"
                @change="handleTargetGroupOverview"
              >
              </v-autocomplete>
            </v-flex>
            <v-spacer />
            <v-flex>
              <v-subheader class="pa-0">_ to</v-subheader>
              <v-autocomplete
                v-model="ageMax"
                :items="ageMaxList"
                :value="ageMax"
                class="black--text"
                :multiple="targetGroupValues._age ? targetGroupValues._age.multiple_selection : false"
                @change="handleTargetGroupOverview"
              >
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-subheader class="pa-0">HHF</v-subheader>
          <v-autocomplete
            v-model="hhf"
            :items="targetGroupValues.hhf ? ['All'].concat(targetGroupValues.hhf.values) : hhf"
            :value="hhf[0]"
            class="black--text"
            :multiple="targetGroupValues.hhf ? targetGroupValues.hhf.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
          </v-autocomplete>
        </v-flex>
        <v-flex xs12 sm5>
          <v-subheader class="pa-0">Gender</v-subheader>
          <v-autocomplete
            v-model="gen"
            :items="targetGroupValues.gen ? ['All'].concat(targetGroupValues.gen.values) : gen"
            :value="gen[0]"
            class="black--text"
            :multiple="targetGroupValues.gen ? targetGroupValues.gen.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
          </v-autocomplete>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-subheader class="pa-0">HEB</v-subheader>
          <v-autocomplete
            v-model="heb"
            :items="targetGroupValues.heb ? ['All'].concat(targetGroupValues.heb.values) : heb"
            :value="heb[0]"
            class="black--text"
            :multiple="targetGroupValues.heb ? targetGroupValues.heb.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
          </v-autocomplete>
        </v-flex>
        <v-flex xs12 sm5>
          <v-subheader class="pa-0">Education</v-subheader>
          <v-autocomplete
            v-model="edu"
            :items="targetGroupValues.edu ? ['All'].concat(targetGroupValues.edu.values) : edu"
            :value="edu[0]"
            class="black--text"
            :multiple="targetGroupValues.edu ? targetGroupValues.edu.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
          </v-autocomplete>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-layout row wrap justify-space-between align-center>
            <v-flex>
              <v-subheader class="pa-0">HHIncome from _</v-subheader>
              <v-autocomplete
                v-model="hhincomeMin"
                :items="targetGroupValues.hhincome ? targetGroupValues.hhincome.values : [hhincomeMin]"
                :value="hhincomeMin"
                class="black--text"
                :multiple="targetGroupValues.hhincome ? targetGroupValues.hhincome.multiple_selection : false"
                @change="handleTargetGroupOverview"
              >
              </v-autocomplete>
            </v-flex>
            <v-spacer />
            <v-flex>
              <v-subheader class="pa-0">HHIncome _ to</v-subheader>
              <v-autocomplete
                v-model="hhincomeMax"
                :items="targetGroupValues.hhincome ? targetGroupValues.hhincome.values : [hhincomeMax]"
                :value="hhincomeMax"
                class="black--text"
                :multiple="targetGroupValues.hhincome ? targetGroupValues.hhincome.multiple_selection : false"
                @change="handleTargetGroupOverview"
              >
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm5>
          <v-subheader class="pa-0">State</v-subheader>
          <v-autocomplete
            v-model="state"
            :items="targetGroupValues.state ? ['All'].concat(targetGroupValues.state.values) : state"
            :value="state[0]"
            class="black--text"
            :multiple="targetGroupValues.state ? targetGroupValues.state.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
          </v-autocomplete>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-layout row wrap justify-space-between align-center>
            <v-flex>
              <v-subheader class="pa-0">PinHH MIN</v-subheader>
              <v-autocomplete
                v-model="pinhhGroupMin"
                :items="targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.values : [pinhhGroupMin]"
                :value="pinhhGroupMin"
                class="black--text"
                :multiple="targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.multiple_selection : false"
                @change="handleTargetGroupOverview"
              >
              </v-autocomplete>
            </v-flex>
            <v-spacer />
            <v-flex>
              <v-subheader class="pa-0">PinHH MAX</v-subheader>
              <v-autocomplete
                v-model="pinhhGroupMax"
                :items="targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.values : [pinhhGroupMax]"
                :value="pinhhGroupMax"
                class="black--text"
                :multiple="targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.multiple_selection : false"
                @change="handleTargetGroupOverview"
              >
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm5>
          <v-subheader class="pa-0">Marital status</v-subheader>
          <v-autocomplete
            v-model="fam"
            :items="targetGroupValues.fam ? ['All'].concat(targetGroupValues.fam.values) : fam"
            :value="fam[0]"
            class="black--text"
            :multiple="targetGroupValues.fam ? targetGroupValues.fam.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
          </v-autocomplete>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-subheader class="pa-0">Child in the household</v-subheader>
          <v-autocomplete
            v-model="child"
            :items="targetGroupValues.child ? ['All'].concat(targetGroupValues.child.values) : child"
            :value="child[0]"
            class="black--text"
            :multiple="targetGroupValues.child ? targetGroupValues.child.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
          </v-autocomplete>
        </v-flex>
      </v-layout>
    </fieldset>
    <v-card class="mb-4 pt-3">
      <v-data-table
        :headers="targetGroupHeaders"
        :items="targetGroupRows"
        hide-actions
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.categories }}</td>
          <td>{{ props.item.total }}</td>
          <td>{{ props.item.targetgroup }}</td>
          <td>{{ props.item.targetgroup_percent }}</td>
        </template>
      </v-data-table>
      <h3 class="mt-3">Progress:</h3>
      <v-progress-linear :value="targetGroupProgress"></v-progress-linear>
    </v-card>
    <v-layout row align-center justify-space-between>
      <v-btn
          text
          @click="handlePreviousClick()"
          class="ma-0">
        Previous
      </v-btn>
      <v-btn
        color="primary"
        class="ma-0"
        @click="handleNextClick()"
      >
        Next
      </v-btn>
    </v-layout>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'sa-dashboard',
  computed: {
    ...mapGetters('dashboard', [
      'selectedCampaigns',
      'targetGroupValues',
      'targetGroupHeaders',
      'targetGroupRows',
      'targetGroupProgress'
    ])
  },
  props: {
    details: Boolean
  },
  data () {
    return {
      ageMin: (this.targetGroupValues || {})._age ? this.targetGroupValues._age.default.min : '1',
      ageMax: (this.targetGroupValues || {})._age ? this.targetGroupValues._age.default.max : '100',
      ageMinList: this.targetGroupValues._age ? this.targetGroupValues._age.values : [this.ageMin],
      ageMaxList: this.targetGroupValues._age ? this.targetGroupValues._age.values : [this.ageMax],
      child: [(this.targetGroupValues || {}).child ? this.targetGroupValues.child.default : 'All'],
      edu: [(this.targetGroupValues || {}).edu ? this.targetGroupValues.edu.default : 'All'],
      fam: [(this.targetGroupValues || {}).fam ? this.targetGroupValues.fam.default : 'All'],
      gen: [(this.targetGroupValues || {}).gen ? this.targetGroupValues.gen.default : 'All'],
      heb: [(this.targetGroupValues || {}).heb ? this.targetGroupValues.heb.default : 'All'],
      hhf: [(this.targetGroupValues || {}).hhf ? this.targetGroupValues.hhf.default : 'All'],
      hhincomeMin: (this.targetGroupValues || {}).hhincome ? this.targetGroupValues.hhincome.default.min : '0 bis unter 500 Euro',
      hhincomeMax: (this.targetGroupValues || {}).hhincome ? this.targetGroupValues.hhincome.default.max : '5.000 Euro und mehr',
      pinhhGroupMin: (this.targetGroupValues || {}).pinhh_group ? this.targetGroupValues.pinhh_group.default.min : '1 Person',
      pinhhGroupMax: (this.targetGroupValues || {}).pinhh_group ? this.targetGroupValues.pinhh_group.default.max : '5+ Personen',
      state: [(this.targetGroupValues || {}).state ? this.targetGroupValues.state.default : 'All']
    }
  },
  watch: {
    selectedCampaigns (value) {
      value.length > 0 && this.handleTargetGroupOverview()
    },
    ageMin () {

    },
    child (newArr, oldArr) {
      if (newArr.includes('All') && !oldArr.includes('All')) {
        this.child = ['All'].concat(this.targetGroupValues.child.values)
      } else if (!newArr.includes('All') && oldArr.includes('All')) {
        this.child = []
      }
    },
    edu (newArr, oldArr) {
      if (newArr.includes('All') && !oldArr.includes('All')) {
        this.edu = ['All'].concat(this.targetGroupValues.edu.values)
      } else if (!newArr.includes('All') && oldArr.includes('All')) {
        this.edu = []
      }
    },
    fam (newArr, oldArr) {
      if (newArr.includes('All') && !oldArr.includes('All')) {
        this.fam = ['All'].concat(this.targetGroupValues.fam.values)
      } else if (!newArr.includes('All') && oldArr.includes('All')) {
        this.fam = []
      }
    },
    gen (newArr, oldArr) {
      if (newArr.includes('All') && !oldArr.includes('All')) {
        this.gen = ['All'].concat(this.targetGroupValues.gen.values)
      } else if (!newArr.includes('All') && oldArr.includes('All')) {
        this.gen = []
      }
    },
    heb (newArr, oldArr) {
      if (newArr.includes('All') && !oldArr.includes('All')) {
        this.heb = ['All'].concat(this.targetGroupValues.heb.values)
      } else if (!newArr.includes('All') && oldArr.includes('All')) {
        this.heb = []
      }
    },
    hhf (newArr, oldArr) {
      if (newArr.includes('All') && !oldArr.includes('All')) {
        this.hhf = ['All'].concat(this.targetGroupValues.hhf.values)
      } else if (!newArr.includes('All') && oldArr.includes('All')) {
        this.hhf = []
      }
    },
    state (newArr, oldArr) {
      if (newArr.includes('All') && !oldArr.includes('All')) {
        this.state = ['All'].concat(this.targetGroupValues.state.values)
      } else if (!newArr.includes('All') && oldArr.includes('All')) {
        this.state = []
      }
    }
  },
  methods: {
    handleNextClick () {
      this.$store.dispatch('SOCKET_ONSEND', {
        method: 'subscribeTargetGroup',
        status: 'stop'
      })
      this.$store.dispatch('SOCKET_ONSEND', {
        method: 'subscribeCampaignResult',
        targetGroupIds: [this.selectedCampaigns],
        current_page: 1,
        per_page: 10,
        sort: 1,
        sort_by: 'Campaign'
      })
      this.$emit('continue')
    },
    handlePreviousClick () {
      this.$store.dispatch('SOCKET_ONSEND', {
        method: 'subscribeTargetGroup',
        status: 'stop'
      })
      this.$emit('cancel')
    },
    handleTargetGroupOverview () {
      this.$store.dispatch('SOCKET_ONSEND', {
        method: 'getTargetGroupOverview',
        campaignIds: this.selectedCampaigns,
        selections: {
          _age: {
            min: this.ageMin,
            max: this.ageMax
          },
          gen: this.gen,
          edu: this.edu,
          state: this.state,
          fam: this.fam,
          hhf: this.hhf,
          heb: this.hef,
          hhincome: {
            min: this.hhincomeMin,
            max: this.hhincomeMax
          },
          pinhh_group: {
            min: this.pinhhGroupMin,
            max: this.pinhhGroupMax
          },
          child: this.child
        }
      })
    }
  }
}
</script>
