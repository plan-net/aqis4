<template>
  <div>
    <v-card class="mb-3 pb-3">
      <v-layout align-space-between justify-space-between row fill-height wrap>
        <v-flex xs12 sm6 class="pa-2">
          <fieldset class="pa-3">
            <legend>
              Step 1
            </legend>
            <v-flex>
              <h2 class="mb-3">Clients list{{clients.length > DISPLAY_AMOUNT_CRITERIA ? ` (${clients.length})` : ''}}:</h2>
              <v-autocomplete
                v-model="selectedClientIds"
                :disabled="!clients.length"
                :items="clients"
                chips
                label="Clients"
                item-text="name"
                class="black--text"
                item-value="id"
                multiple
              >
                <template v-slot:selection="data">
                  <v-chip
                    :selected="data.selected"
                    close
                    class="chip--select-multi"
                    @input="removeClient(data.item)"
                  >
                    {{ data.item.name }}
                  </v-chip>
                </template>
              </v-autocomplete>
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
              <v-btn
                  block
                  color="primary"
                  :disabled="!selectedClientIds.length || !startDate || !endDate"
                  @click="searchCampaigns()">
                Search Campaigns
              </v-btn>
            </v-flex>
          </fieldset>
        </v-flex>

        <v-flex xs12 sm6 class="pa-2">
          <fieldset class="full-height pa-3">
            <legend>
              Step 2
            </legend>
            <v-flex>
              <h2 class="mb-3">Campaigns list{{campaigns.length > DISPLAY_AMOUNT_CRITERIA ? ` (${campaigns.length})` : ''}}:</h2>
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
          </fieldset>
        </v-flex>
      </v-layout>
    </v-card>
    <v-layout row justify-end>
      <v-btn
        :disabled="!selectedCampaignIds.length"
        color="primary"
        class="ma-0"
        @click="handleNextClick()"
      >
        Next
      </v-btn>
    </v-layout>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { DISPLAY_AMOUNT_CRITERIA } from '@/constants'

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
      DISPLAY_AMOUNT_CRITERIA,
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
    },
    removeClient (item) {
      const index = this.selectedClientIds.indexOf(item.id)
      if (index >= 0) this.selectedClientIds.splice(index, 1)
    },
    searchCampaigns () {
      this.$store.dispatch('dashboard/getCampaign', {
        clientIds: this.selectedClientIds,
        start: this.startDate,
        end: this.endDate
      })
    },
    handleNextClick () {
      this.$store.dispatch('dashboard/setSelectedCampaigns', this.selectedCampaignIds)
      this.$store.dispatch('dashboard/getTargetGroupValues', {
        campaignIds: this.selectedCampaignIds
      })
      this.$emit('continue')
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
.full-height {
  height: 100%;
}
</style>
