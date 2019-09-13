<template>
  <c4-page header-type="2">
    <transition name="fade" mode="out-in" :duration="{ enter: 200, leave: 300 }">
      <v-stepper v-model="currentStep">
        <v-stepper-header>
          <v-stepper-step :complete="currentStep > 1" step="1">Client & Campaign</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="currentStep > 2" step="2">Demo & Placement</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">Results</v-stepper-step>
          <v-progress-linear :indeterminate="true" v-if="progress" class="progress"></v-progress-linear>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <dashboard-client-campaign @continue="currentStep++"></dashboard-client-campaign>
          </v-stepper-content>
          <v-stepper-content step="2">
            <dashboard-target-group @continue="currentStep++" @cancel="currentStep--" details></dashboard-target-group>
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

import { mapGetters } from 'vuex'
import DashboardClientCampaign from '@/components/dashboard/DashboardClientCampaign'
import DashboardTargetGroup from '@/components/dashboard/DashboardTargetGroup'
import DashboardResult from '@/components/dashboard/DashboardResult'

export default {
  name: 'sa-demo-placement',
  computed: {
    ...mapGetters(['progress'])
  },
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
<style scoped lang="scss">
.progress {
  margin: 0;
  position: relative;
  margin-top: -7px;
}
</style>
