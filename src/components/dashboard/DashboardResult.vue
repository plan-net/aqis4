<template>
  <div>
    <v-card class="mb-4 pt-3">
      <v-data-table
        :headers="resultHeaders"
        :items="resultItems"
        item-key="id"
        class="elevation-1"
        :must-sort="true"
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
    </v-card>
    <v-btn text @click="handlePreviousClick()" class="ma-0">Previous</v-btn>
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
  },
  methods: {
    handlePreviousClick () {
      this.$store.dispatch('SOCKET_ONSEND', {
        method: 'subscribeCampaignResult',
        status: 'stop'
      })
      this.$emit('cancel')
    }
  }
}
</script>
