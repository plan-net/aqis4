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
            <v-card class="mb-3 pt-5" height="calc(100vh - 450px)">
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
            <v-btn
              color="primary"
              @click="currentStep = 2"
            >
              Continue
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card class="mb-3 pt-5" height="calc(100vh - 450px)">
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
              <h3 class="mt-5">Progress:</h3>
              <v-progress-linear
                color="success"
                height="20"
                :value="targetGroupProgress"
              ></v-progress-linear>
            </v-card>
            <v-btn
              color="primary"
              @click="currentStep = 3"
            >
              Continue
            </v-btn>
            <v-btn text @click="currentStep = 1">Cancel</v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>
            <v-btn
              color="primary"
              @click="currentStep = 1"
            >
              Continue
            </v-btn>
            <v-btn text>Cancel</v-btn>
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
    ...mapGetters('dashboard', ['clients', 'campaigns', 'targetGroupHeaders', 'targetGroupItems', 'targetGroupProgress'])
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
