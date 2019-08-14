<template>
  <c4-page header-type="2" :dense="false">
    <div>
      <v-container grid-list-xs fluid style="margin-top: -14px;">
        <v-layout justify-center row wrap style="margin-left: -16px; margin-right: -16px;">
          <v-flex xs12>
            <H1>{{greeting}}</H1>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </c4-page>
</template>
<script>
import { mapGetters } from 'vuex'
import { TEST_REQUEST } from '@/store/types'

export default {
  name: 'sa-clients',
  components: {
  },
  props: ['id'],
  mounted () {
    this.$store.dispatch(TEST_REQUEST, this.$props.id)
      .then(resp => {
        this.greeting = resp
      })
      .catch(err => {
        console.log(err)
      })
  },
  data () {
    return {
      greeting: null
    }
  },
  computed: {
    ...mapGetters(['clients'])
  },
  methods: {}
}
</script>
