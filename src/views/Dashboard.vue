<template>
  <c4-page header-type="2">
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
