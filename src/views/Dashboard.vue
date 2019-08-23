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
            <dashboard-client-campaign @continue="currentStep++"></dashboard-client-campaign>
          </v-stepper-content>
          <v-stepper-content step="2">
            <dashboard-target-group @continue="currentStep++" @cancel="currentStep--"></dashboard-target-group>
          </v-stepper-content>
          <v-stepper-content step="3">
            <dashboard-result @cancel="currentStep--"></dashboard-result>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </transition>
  </c4-page>
</template>
<script>
import DashboardClientCampaign from '@/components/dashboard/DashboardClientCampaign'
import DashboardTargetGroup from '@/components/dashboard/DashboardTargetGroup'
import DashboardResult from '@/components/dashboard/DashboardResult'

export default {
  name: 'sa-dashboard',
  components: {
    DashboardClientCampaign,
    DashboardTargetGroup,
    DashboardResult
  },
  data () {
    return {
      currentStep: 0
    }
  }
}
</script>
