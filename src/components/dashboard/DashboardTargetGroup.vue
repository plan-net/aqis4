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
                :items="targetGroupValues._age ? targetGroupValues._age.values : []"
                :label="targetGroupValues._age ? targetGroupValues._age.format_short : ''"
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
                :items="targetGroupValues._age ? targetGroupValues._age.values : []"
                :label="targetGroupValues._age ? targetGroupValues._age.format_short : ''"
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
            :items="targetGroupValues.hhf ? targetGroupValues.hhf.values : []"
            :label="targetGroupValues.hhf ? targetGroupValues.hhf.format_short : ''"
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
            :items="targetGroupValues.gen ? targetGroupValues.gen.values : []"
            :label="targetGroupValues.gen ? targetGroupValues.gen.format_short : ''"
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
            :items="targetGroupValues.heb ? targetGroupValues.heb.values : []"
            :label="targetGroupValues.heb ? targetGroupValues.heb.format_short : ''"
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
            :items="targetGroupValues.edu ? targetGroupValues.edu.values : []"
            :label="targetGroupValues.edu ? targetGroupValues.edu.format_short : ''"
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
                :items="targetGroupValues.hhincome ? targetGroupValues.hhincome.values : []"
                :label="targetGroupValues.hhincome ? targetGroupValues.hhincome.format_short : ''"
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
                :items="targetGroupValues.hhincome ? targetGroupValues.hhincome.values : []"
                :label="targetGroupValues.hhincome ? targetGroupValues.hhincome.format_short : ''"
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
            :items="targetGroupValues.state ? targetGroupValues.state.values : []"
            :label="targetGroupValues.state ? targetGroupValues.state.format_short : ''"
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
                :items="targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.values : []"
                :label="targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.format_short : ''"
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
                :items="targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.values : []"
                :label="targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.format_short : ''"
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
            :items="targetGroupValues.fam ? targetGroupValues.fam.values : []"
            :label="targetGroupValues.fam ? targetGroupValues.fam.format_short : ''"
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
            :items="targetGroupValues.child ? targetGroupValues.child.values : []"
            :label="targetGroupValues.child ? targetGroupValues.child.format_short : ''"
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
        v-model="selectedTargetGroups"
        :headers="targetGroupHeaders"
        :items="targetGroupRows"
        hide-actions
        select-all
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>
            <v-checkbox
              v-model="props.selected"
              color="primary"
              hide-details
            ></v-checkbox>
          </td>
          <td>{{ props.item.categories }}</td>
          <td>{{ props.item.targetgroup }}</td>
          <td>{{ props.item.targetgroup_percent }}</td>
          <td>{{ props.item.total }}</td>
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
        :disabled="!selectedTargetGroups.length"
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
      state: [(this.targetGroupValues || {}).state ? this.targetGroupValues.state.default : 'All'],
      selectedTargetGroups: []
    }
  },
  watch: {
    selectedCampaigns (value) {
      value.length > 0 && this.handleTargetGroupOverview()
    }
  },
  methods: {
    handleNextClick () {
      this.$store.dispatch('dashboard/subscribeTargetGroup', {
        status: 'stop'
      })
      this.$store.dispatch('dashboard/subscribeCampaignResult', {
        targetGroupIds: this.selectedTargetGroups.map(targetGroup => targetGroup.id),
        current_page: 1,
        per_page: 10,
        sort: 1,
        sort_by: 'Campaign'
      })
      this.$emit('continue')
    },
    handlePreviousClick () {
      this.$store.dispatch('dashboard/subscribeTargetGroup', {
        status: 'stop'
      })
      this.$emit('cancel')
    },
    handleTargetGroupOverview () {
      this.$store.dispatch('dashboard/getTargetGroupOverview', {
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
