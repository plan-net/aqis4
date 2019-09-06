<template>
  <div>
    <fieldset class="pa-3" v-if="details">
      <legend>
        Step 3
      </legend>
      <v-layout align-space-between justify-space-between row wrap>
        <v-flex xs12 sm6>
          <v-select
            :items="items"
            label="Standard"
            class="px-2"
          ></v-select>
        </v-flex>
        <v-flex xs12 sm6>
          <v-select
            :items="items"
            label="Standard"
            class="px-2"
          ></v-select>
        </v-flex>
        <v-flex xs12 sm6>
          <v-select
            :items="items"
            label="Standard"
            class="px-2"
          ></v-select>
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
