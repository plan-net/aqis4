<template>
    <c4-page header-type="2" :dense="false">
        <transition name="fade" mode="out-in" :duration="{ enter: 200, leave: 300 }">
            <div>
                <v-container grid-list-xs fluid style="margin-top: -14px;">
                    <v-layout justify-center row wrap style="margin-left: -16px; margin-right: -16px;"
                              v-if="clients.length">
                        <v-flex xs6 sm4 md3 v-for="n in clients" :key="n._id" class="px-0 mx-3">
                            <v-card :to="n.path" class="mx-1 my-2">
                                <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                       aspect-ratio="2"></v-img>
                                <v-card-title primary-title>
                                    <h3 class="title text-truncate">{{n.name.toUpperCase()}}</h3>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center row wrap style="margin-left: -16px; margin-right: -16px;" v-else>
                        <v-flex>
                            <v-card>
                                <v-card-text>
                                    <c4-empty text="Please add a client."></c4-empty>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </div>
        </transition>

        <create-client :open="createDialogOpen" @close="createDialogOpen=false"></create-client>

    </c4-page>
</template>
<script>
import { mapGetters } from 'vuex'
import CreateClient from '@/components/client/CreateClient'

export default {
  name: 'sa-clients',
  components: {
    CreateClient
  },
  mounted () {
  },
  data () {
    return {
      createDialogOpen: false
    }
  },
  computed: {
    ...mapGetters(['clients'])
  },
  methods: {}
}
</script>
