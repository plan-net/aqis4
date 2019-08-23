<template>
  <div>
    <v-card class="mb-3 py-5">
      <v-layout justify-center wrap align-center row>
        <v-spacer xs12 sm12 md4/>
        <v-flex xs12 sm12 md4 row align-center justify-center>
          <v-select
              :items="clients"
              label="Client"
              v-model="selectedClientIds"
              multiple
              class="black--text"
              item-text="name"
              item-value="id"
          ></v-select>
          <v-select
              v-model="selectedCampaignIds"
              :items="campaigns"
              label="Campaign"
              multiple
              class="black--text"
              item-text="name"
              item-value="id"
              :disabled="!selectedClientIds.length"
          ></v-select>
        </v-flex>
        <v-spacer xs12 sm12 md4/>
      </v-layout>
    </v-card>
    <v-layout row justify-end>
      <v-btn
        :disabled="!selectedCampaignIds.length"
        color="primary"
        class="ma-0"
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
  name: 'dashboard-client-campaign',
  computed: {
    ...mapGetters('dashboard', [
      'clients',
      'campaigns'
    ])
  },
  data () {
    return {
      selectedClientIds: [],
      selectedCampaignIds: []
    }
  },
  methods: {}
}
</script>
