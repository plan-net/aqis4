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
              <v-subheader class="pa-0 white--text">Age from _</v-subheader>
              <v-autocomplete
                v-model="ageMin"
                :items="targetGroupValues._age ? targetGroupValues._age.values : []"
                :label="ageMin"
                class="black--text"
              >
              </v-autocomplete>
            </v-flex>
            <v-spacer />
            <v-flex>
              <v-subheader class="pa-0 white--text">_ to</v-subheader>
              <v-autocomplete
                v-model="ageMax"
                :items="targetGroupValues._age ? targetGroupValues._age.values : []"
                :label="ageMax"
                class="black--text"
              >
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-layout row wrap justify-space-between align-center>
            <v-flex>
              <v-subheader class="pa-0 white--text">HHF</v-subheader>
              <v-autocomplete
                v-model="hhf"
                :items="targetGroupValues.hhf ? targetGroupValues.hhf.values : []"
                :label="hhf"
                class="black--text"
              >
              </v-autocomplete>
            </v-flex>
            <v-spacer />
            <v-flex>
              <v-subheader class="pa-0 white--text">HEB</v-subheader>
              <v-autocomplete
                v-model="heb"
                :items="targetGroupValues.heb ? targetGroupValues.heb.values : []"
                :label="heb"
                class="black--text"
              >
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm5>
          <v-subheader class="pa-0 white--text">Gender</v-subheader>
          <v-autocomplete
            v-model="gen"
            :items="targetGroupValues.gen ? targetGroupValues.gen.values : []"
            label="Gender"
            class="black--text"
          >
          </v-autocomplete>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-layout row wrap justify-space-between align-center>
            <v-flex>
              <v-subheader class="pa-0 white--text">HHIncome from _</v-subheader>
              <v-autocomplete
                v-model="hhincomeMin"
                :items="targetGroupValues.hhincome ? targetGroupValues.hhincome.values : []"
                :label="hhincomeMin"
                class="black--text"
              >
              </v-autocomplete>
            </v-flex>
            <v-spacer />
            <v-flex>
              <v-subheader class="pa-0 white--text">HHIncome _ to</v-subheader>
              <v-autocomplete
                v-model="hhincomeMax"
                :items="targetGroupValues.hhincome ? targetGroupValues.hhincome.values : []"
                :label="hhincomeMax"
                class="black--text"
              >
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm5>
          <v-subheader class="pa-0 white--text">Education</v-subheader>
          <v-autocomplete
            v-model="edu"
            :items="targetGroupValues.edu ? targetGroupValues.edu.values : []"
            :label="edu"
            class="black--text"
          >
          </v-autocomplete>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-layout row wrap justify-space-between align-center>
            <v-flex>
              <v-subheader class="pa-0 white--text">PinHH MIN</v-subheader>
              <v-autocomplete
                v-model="pinhhGroupMin"
                :items="targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.values : []"
                :label="pinhhGroupMin"
                class="black--text"
              >
              </v-autocomplete>
            </v-flex>
            <v-spacer />
            <v-flex>
              <v-subheader class="pa-0 white--text">PinHH MAX</v-subheader>
              <v-autocomplete
                v-model="pinhhGroupMax"
                :items="targetGroupValues.pinhh_group ? targetGroupValues.pinhh_group.values : []"
                :label="pinhhGroupMax"
                class="black--text"
              >
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm5>
          <v-subheader class="pa-0 white--text">State</v-subheader>
          <v-autocomplete
            v-model="state"
            :items="targetGroupValues.state ? targetGroupValues.state.values : []"
            :label="state"
            class="black--text"
          >
          </v-autocomplete>
        </v-flex>
        <v-spacer />
        <v-flex xs12 sm5>
          <v-subheader class="pa-0 white--text">Child in the household</v-subheader>
          <v-autocomplete
            v-model="child"
            :items="targetGroupValues.child ? targetGroupValues.child.values : []"
            :label="child"
            class="black--text"
          >
          </v-autocomplete>
        </v-flex>
        <v-flex xs12 sm5>
          <v-subheader class="pa-0 white--text">Marital status</v-subheader>
          <v-autocomplete
            v-model="fam"
            :items="targetGroupValues.fam ? targetGroupValues.fam.values : []"
            :label="fam"
            class="black--text"
          >
          </v-autocomplete>
        </v-flex>
      </v-layout>
    </fieldset>
    <v-card class="mb-4 pt-3">
      <v-data-table
        v-model="selectedTargetGroups"
        :headers="targetGroupHeaders"
        :items="targetGroupItems"
        item-key="id"
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
          <td>{{ props.item.targetgroup }}</td>
          <td>{{ props.item.campaigns }}</td>
          <td>{{ props.item.start }}</td>
          <td>{{ props.item.end }}</td>
          <td>{{ props.item.ziel }}</td>
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
      'targetGroupValues',
      'targetGroupHeaders',
      'targetGroupItems',
      'targetGroupProgress'
    ])
  },
  props: {
    details: Boolean
  },
  data () {
    return {
      ageMin: '1',
      ageMax: '100',
      child: 'All',
      edu: 'All',
      fam: 'All',
      gen: 'All',
      heb: 'All',
      hhf: 'All',
      hhincomeMin: '0 bis unter 500 Euro',
      hhincomeMax: '5.000 Euro und mehr',
      pinhhGroupMin: '1 Person',
      pinhhGroupMax: '5+ Personen',
      state: 'All',
      selectedTargetGroups: []
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
    }
  }
}
</script>
