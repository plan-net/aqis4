<template>
  <c4-page header-type="2">
    <v-container fluid slot="page-header-content">
      <v-layout class="white--text pt-2">
        <v-flex>
          <h3 class="display-1 mb-3">Welcome to dashboard</h3>
          <div class="title">Lorem ipsum dolor sit amet, per movet conceptam ad, duo ut elit impetus
              splendide.
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <transition name="fade" mode="out-in" :duration="{ enter: 200, leave: 300 }">
      <v-stepper v-model="currentStep">
        <v-stepper-header>
          <v-stepper-step :complete="currentStep > 1" step="1">Client & Campaign</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="currentStep > 2" step="2">Target Group</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">Results</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-3 py-5">
              <v-container fluid class="pa-0">
                <v-layout justify-center wrap align-center row>
                  <v-spacer xs12 sm4/>
                  <v-flex xs12 sm4 row align-center justify-center>
                    <v-select
                        :items="clients"
                        label="Client"
                        multiple
                        class="black--text"
                        item-text="name"
                        item-value="_id"
                    ></v-select>
                    <v-select
                        :items="campaigns"
                        label="Campaign"
                        multiple
                        class="black--text"
                        item-text="name"
                        item-value="_id"
                    ></v-select>
                  </v-flex>
                  <v-spacer xs12 sm4/>
                </v-layout>
              </v-container>
            </v-card>
            <v-layout row justify-end>
              <v-btn
                color="primary"
                class="ma-0"
                @click="currentStep = 2"
              >
                Continue
              </v-btn>
            </v-layout>
          </v-stepper-content>
          <v-stepper-content step="2">
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
                      primary
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
              <v-progress-linear
                color="success"
                height="20"
                class="mt-1"
                :value="targetGroupProgress"
              ></v-progress-linear>
            </v-card>
            <v-layout row align-center justify-space-between>
              <v-btn text @click="currentStep = 1" class="ma-0">Cancel</v-btn>
              <v-btn
                color="primary"
                class="ma-0"
                @click="currentStep = 3"
              >
                Continue
              </v-btn>
            </v-layout>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card class="mb-4 pt-3">
              <v-data-table
                :headers="resultHeaders"
                :items="resultItems"
                item-key="id"
                class="elevation-1"
              >
                <template v-slot:items="props">
                  <td>{{ props.item.campaign }}</td>
                  <td>{{ props.item.start }}</td>
                  <td>{{ props.item.end }}</td>
                  <td>{{ props.item.impressions }}</td>
                  <td>{{ props.item.panellist }}</td>
                  <td>{{ props.item.estvalue }}</td>
                  <td>{{ props.item.ziel }}</td>
                </template>
              </v-data-table>
              <h3 class="mt-3">Progress:</h3>
              <v-progress-linear
                color="success"
                height="20"
                class="mt-1"
                :value="resultProgress"
              ></v-progress-linear>
            </v-card>
            <v-btn text @click="currentStep = 2" class="ma-0">Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </transition>
  </c4-page>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'sa-dashboard',
  components: {
  },
  mounted () {
  },
  computed: {
    ...mapGetters('dashboard', [
      'clients',
      'campaigns',
      'targetGroupHeaders',
      'targetGroupItems',
      'targetGroupProgress',
      'resultHeaders',
      'resultItems',
      'resultProgress'
    ])
  },
  data () {
    return {
      currentStep: 0,
      selectedTargetGroups: []
    }
  },
  methods: {}
}
</script>
