<template>
    <c4-webapp :full-width="true">
        <side-navigation slot="navigation-slot"></side-navigation>
        <div slot="router">
            <transition name="fade" mode="out-in" :duration="{ enter: 200, leave: 300 }">
                <router-view class="sa"/>
            </transition>
        </div>
    </c4-webapp>
</template>
<script>
import SideNavigation from '@/components/SideNavigation'
import { mapGetters } from 'vuex'
import { getBasePath } from './helper'

export default {
  name: 'Aqis',
  components: {
    SideNavigation
  },
  computed: {
    ...mapGetters(['authenticated'])
  },
  mounted () {
  },
  watch: {
    authenticated (newValue, oldValue) {
      this.$disconnect()

      if (newValue && newValue !== oldValue) {
        let token = JSON.parse(localStorage.getItem('user'))['token']
        this.$connect(`${getBasePath()}/websocket?token=${token}`)
      }
    }
  }
}
</script>
<style lang="scss">

</style>
