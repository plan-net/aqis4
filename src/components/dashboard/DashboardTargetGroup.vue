<template>
  <div>
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
      <v-btn text @click="$emit('cancel')" class="ma-0">Cancel</v-btn>
      <v-btn
        color="primary"
        class="ma-0"
        :disabled="!selectedTargetGroups.length"
        @click="$emit('continue')"
      >
        Continue
      </v-btn>
    </v-layout>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'sa-dashboard',
  computed: {
    ...mapGetters([
      'targetGroupHeaders',
      'targetGroupItems',
      'targetGroupProgress'
    ])
  },
  data () {
    return {
      selectedTargetGroups: []
    }
  },
  methods: {}
}
</script>
