<template>
  <div>
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
    <v-btn text @click="$emit('cancel')" class="ma-0">Previous</v-btn>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard-result',
  computed: {
    ...mapGetters('dashboard', [
      'resultHeaders',
      'resultItems',
      'resultProgress'
    ])
  }
}
</script>
