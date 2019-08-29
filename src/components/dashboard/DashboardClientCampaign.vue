<template>
  <div>
    <v-card class="mb-3 pb-3">
      <v-layout align-space-between justify-space-between row fill-height wrap>
        <v-flex xs12 sm6 class="pa-2">
          <v-card  min-height="400">
            <v-card-title primary-title>
              <v-flex>
                <h2 class="mb-3">Clients</h2>
                <v-select
                    :items="clients"
                    label="Client"
                    v-model="selectedClientIds"
                    multiple
                    class="black--text"
                    item-text="name"
                    item-value="id"
                ></v-select>
                <v-layout row wrap justify-space-between align-center>
                  <v-menu
                    v-model="openStartDatePicker"
                    :close-on-content-click="false"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="startDate"
                        label="Compaigns start date"
                        append-outer-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="startDate" @input="openStartDatePicker = false" :max="endDate"></v-date-picker>
                  </v-menu>
                  <v-spacer class="mx-2 pickers-spacer"/>
                  <v-menu
                    v-model="openEndDatePicker"
                    :close-on-content-click="false"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="endDate"
                        label="Compaigns end date"
                        append-outer-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="endDate" @input="openEndDatePicker = false" :min="startDate"></v-date-picker>
                  </v-menu>
                </v-layout>
                <v-btn block color="primary" :disabled="!selectedClientIds.length || !startDate || !endDate">Search Campaigns</v-btn>
              </v-flex>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 class="pa-2">
          <v-card class="fill-height">
            <v-card-title primary-title>
              <v-flex>
                <h2 class="mb-3">Campaigns</h2>
                <v-autocomplete
                  v-model="selectedCampaignIds"
                  :disabled="!campaigns.length"
                  :items="campaigns"
                  chips
                  label="Campaign"
                  item-text="name"
                  item-value="id"
                  multiple
                >
                  <template v-slot:selection="data">
                    <v-chip
                      :selected="data.selected"
                      close
                      class="chip--select-multi"
                      @input="removeCampaign(data.item)"
                    >
                      {{ data.item.name }}
                    </v-chip>
                  </template>
                </v-autocomplete>
              </v-flex>
            </v-card-title>
          </v-card>
        </v-flex>
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
      openStartDatePicker: false,
      openEndDatePicker: false,
      startDate: null,
      endDate: null,
      selectedClientIds: [],
      selectedCampaignIds: []
    }
  },
  methods: {
    removeCampaign (item) {
      const index = this.selectedCampaignIds.indexOf(item.id)
      if (index >= 0) this.selectedCampaignIds.splice(index, 1)
    }
  }
}
</script>
<style scoped lang="scss">
.pickers-spacer {
  @media screen and (max-width: 1125px) {
    display: none;
  }
}
</style>
