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
              <v-autocomplete
                v-model="ageMin"
                :items="ageMinList"
                :label="`${targetGroupValues._age ? targetGroupValues._age.format_short : ''} from _`"
                :value="ageMin"
                :multiple="targetGroupValues._age ? targetGroupValues._age.multiple_selection : false"
                @change="handleTargetGroupOverview"
              >
              </v-autocomplete>
            </v-flex>
            <v-spacer />
            <v-flex>
              <v-autocomplete
                v-model="ageMax"
                :items="ageMaxList"
                :label="`${targetGroupValues._age ? targetGroupValues._age.format_short : ''} _ to`"
                :value="ageMax"
                :multiple="targetGroupValues._age ? targetGroupValues._age.multiple_selection : false"
                @change="handleTargetGroupOverview"
              >
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-autocomplete
            v-model="hhf"
            :items="targetGroupValues.hhf ? ['All'].concat(targetGroupValues.hhf.values) : hhf"
            :label="targetGroupValues.hhf ? targetGroupValues.hhf.format_short : ''"
            :value="hhf[0]"
            :multiple="targetGroupValues.hhf ? targetGroupValues.hhf.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="!hhf.includes('All')">
                <span>{{ item }}</span>
              </v-chip>
              <v-chip v-if="hhf.includes('All') && index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <span
                v-if="hhf.includes('All') && index === 1"
                class="grey--text caption"
              >(+{{ hhf.length - 1 }} others)</span>
            </template>
          </v-autocomplete>
        </v-flex>
        <v-flex xs12 sm5>
          <v-autocomplete
            v-model="gen"
            :items="targetGroupValues.gen ? ['All'].concat(targetGroupValues.gen.values) : gen"
            :label="targetGroupValues.gen ? targetGroupValues.gen.format_short : ''"
            :value="gen[0]"
            :multiple="targetGroupValues.gen ? targetGroupValues.gen.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="!gen.includes('All')">
                <span>{{ item }}</span>
              </v-chip>
              <v-chip v-if="gen.includes('All') && index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <span
                v-if="gen.includes('All') && index === 1"
                class="grey--text caption"
              >(+{{ gen.length - 1 }} others)</span>
            </template>
          </v-autocomplete>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-autocomplete
            v-model="heb"
            :items="targetGroupValues.heb ? ['All'].concat(targetGroupValues.heb.values) : heb"
            :label="targetGroupValues.heb ? targetGroupValues.heb.format_short : ''"
            :value="heb[0]"
            :multiple="targetGroupValues.heb ? targetGroupValues.heb.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="!heb.includes('All')">
                <span>{{ item }}</span>
              </v-chip>
              <v-chip v-if="heb.includes('All') && index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <span
                v-if="heb.includes('All') && index === 1"
                class="grey--text caption"
              >(+{{ heb.length - 1 }} others)</span>
            </template>
          </v-autocomplete>
        </v-flex>
        <v-flex xs12 sm5>
          <v-autocomplete
            v-model="edu"
            :items="targetGroupValues.edu ? ['All'].concat(targetGroupValues.edu.values) : edu"
            :label="targetGroupValues.edu ? targetGroupValues.edu.format_short : ''"
            :value="edu[0]"
            :multiple="targetGroupValues.edu ? targetGroupValues.edu.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="!edu.includes('All')">
                <span>{{ item }}</span>
              </v-chip>
              <v-chip v-if="edu.includes('All') && index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <span
                v-if="edu.includes('All') && index === 1"
                class="grey--text caption"
              >(+{{ edu.length - 1 }} others)</span>
            </template>
          </v-autocomplete>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-layout row wrap justify-space-between align-center>
            <v-flex>
              <v-autocomplete
                v-model="hhincomeMin"
                :items="hhincomeMinList"
                :label="`${targetGroupValues.hhincome ? targetGroupValues.hhincome.format_short : ''} from _`"
                :value="hhincomeMin"
                :multiple="targetGroupValues.hhincome ? targetGroupValues.hhincome.multiple_selection : false"
                @change="handleTargetGroupOverview"
              >
              </v-autocomplete>
            </v-flex>
            <v-spacer />
            <v-flex>
              <v-autocomplete
                v-model="hhincomeMax"
                :items="hhincomeMaxList"
                :label="`${targetGroupValues.hhincome ? targetGroupValues.hhincome.format_short : ''} _ to`"
                :value="hhincomeMax"
                :multiple="targetGroupValues.hhincome ? targetGroupValues.hhincome.multiple_selection : false"
                @change="handleTargetGroupOverview"
              >
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm5>
          <v-autocomplete
            v-model="state"
            :items="targetGroupValues.state ? ['All'].concat(targetGroupValues.state.values) : state"
            :label="targetGroupValues.state ? targetGroupValues.state.format_short : ''"
            :value="state[0]"
            :multiple="targetGroupValues.state ? targetGroupValues.state.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="!state.includes('All')">
                <span>{{ item }}</span>
              </v-chip>
              <v-chip v-if="state.includes('All') && index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <span
                v-if="state.includes('All') && index === 1"
                class="grey--text caption"
              >(+{{ state.length - 1 }} others)</span>
            </template>
          </v-autocomplete>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-layout row wrap justify-space-between align-center>
            <v-flex>
              <v-autocomplete
                v-model="pinhhGroupMin"
                :items="pinhhGroupMinList"
                :label="`${targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.format_short : ''} MIN`"
                :value="pinhhGroupMin"
                :multiple="targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.multiple_selection : false"
                @change="handleTargetGroupOverview"
              >
              </v-autocomplete>
            </v-flex>
            <v-spacer />
            <v-flex>
              <v-autocomplete
                v-model="pinhhGroupMax"
                :items="pinhhGroupMaxList"
                :label="`${targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.format_short : ''} MAX`"
                :value="pinhhGroupMax"
                :multiple="targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.multiple_selection : false"
                @change="handleTargetGroupOverview"
              >
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm5>
          <v-autocomplete
            v-model="fam"
            :items="targetGroupValues.fam ? ['All'].concat(targetGroupValues.fam.values) : fam"
            :label="targetGroupValues.fam ? targetGroupValues.fam.format_short : ''"
            :value="fam[0]"
            :multiple="targetGroupValues.fam ? targetGroupValues.fam.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="!fam.includes('All')">
                <span>{{ item }}</span>
              </v-chip>
              <v-chip v-if="fam.includes('All') && index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <span
                v-if="fam.includes('All') && index === 1"
                class="grey--text caption"
              >(+{{ fam.length - 1 }} others)</span>
            </template>
          </v-autocomplete>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-autocomplete
            v-model="child"
            :items="targetGroupValues.child ? ['All'].concat(targetGroupValues.child.values) : child"
            :label="targetGroupValues.child ? targetGroupValues.child.format_short : ''"
            :value="child[0]"
            :multiple="targetGroupValues.child ? targetGroupValues.child.multiple_selection : true"
            @change="handleTargetGroupOverview"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="!child.includes('All')">
                <span>{{ item }}</span>
              </v-chip>
              <v-chip v-if="child.includes('All') && index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <span
                v-if="child.includes('All') && index === 1"
                class="grey--text caption"
              >(+{{ child.length - 1 }} others)</span>
            </template>
          </v-autocomplete>
        </v-flex>
      </v-layout>
    </fieldset>
    <v-card class="mb-4 pt-3">
      <v-data-table
        :headers="targetGroupHeaders"
        :items="targetGroupRows"
        hide-actions
        :must-sort="true"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.categories }}</td>
          <td>{{ props.item.total }}</td>
          <td>{{ props.item.targetgroup }}</td>
          <td>{{ props.item.targetgroup_percent }}</td>
        </template>
      </v-data-table>
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
        :disabled="!targetGroupValues || !targetGroupRows.length"
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
      'targetGroupRows'
    ])
  },
  props: {
    details: Boolean
  },
  data () {
    return {
      ageMin: '',
      ageMax: '',
      ageMinList: [],
      ageMaxList: [],
      child: [],
      edu: [],
      fam: [],
      gen: [],
      heb: [],
      hhf: [],
      hhincomeMin: '',
      hhincomeMax: '',
      hhincomeMinList: [],
      hhincomeMaxList: [],
      pinhhGroupMin: '',
      pinhhGroupMax: '',
      pinhhGroupMinList: [],
      pinhhGroupMaxList: [],
      state: []
    }
  },
  watch: {
    targetGroupValues (value) {
      this.ageMin = value._age.default.min
      this.ageMax = value._age.default.max
      this.ageMinList = value._age.values
      this.ageMaxList = value._age.values
      this.child = value.child.default
      this.edu = value.edu.default
      this.fam = value.fam.default
      this.gen = value.gen.default
      this.heb = value.heb.default
      this.hhf = value.hhf.default
      this.hhincomeMin = value.hhincome.default.min
      this.hhincomeMax = value.hhincome.default.max
      this.hhincomeMinList = value.hhincome.values
      this.hhincomeMaxList = value.hhincome.values
      this.pinhhGroupMin = value.pinhh_group.default.min
      this.pinhhGroupMax = value.pinhh_group.default.max
      this.pinhhGroupMinList = value.pinhh_group.values
      this.pinhhGroupMaxList = value.pinhh_group.values
      this.state = value.state.default
      this.handleTargetGroupOverview()
    },
    ageMin (value) {
      this.ageMaxList = this.targetGroupValues._age.values.slice(this.targetGroupValues._age.values.indexOf(value))
    },
    ageMax (value) {
      this.ageMinList = this.targetGroupValues._age.values.slice(0, this.targetGroupValues._age.values.indexOf(value) + 1)
    },
    hhincomeMin (value) {
      this.hhincomeMaxList = this.targetGroupValues.hhincome.values.slice(this.targetGroupValues.hhincome.values.indexOf(value))
    },
    hhincomeMax (value) {
      this.hhincomeMinList = this.targetGroupValues.hhincome.values.slice(0, this.targetGroupValues.hhincome.values.indexOf(value) + 1)
    },
    pinhhGroupMin (value) {
      this.pinhhGroupMaxList = this.targetGroupValues.pinhh_group.values.slice(this.targetGroupValues.pinhh_group.values.indexOf(value))
    },
    pinhhGroupMax (value) {
      this.pinhhGroupMinList = this.targetGroupValues.pinhh_group.values.slice(0, this.targetGroupValues.pinhh_group.values.indexOf(value) + 1)
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
      this.$store.dispatch('dashboard/setSelectedCampaigns', [])
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
