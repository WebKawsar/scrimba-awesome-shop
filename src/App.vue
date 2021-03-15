<template>
  <v-app>
    <TopNav />
    <v-content>
      <router-view></router-view>
    </v-content>

    <v-snackbar
      v-model="$store.state.snackbar.show"
      :multi-line="true"
      :right="true"
      :top="true"
      :timeout="6000"
      :color="$store.state.snackbar.variant"
    >
      {{ $store.state.snackbar.message }}
      <v-btn
        dark
        text
        @click="updateSnackbar"
      >
        Close
      </v-btn>
    </v-snackbar>

  </v-app>
</template>

<script>
import TopNav from "./components/TopNav"
  export default {
    components: {
      TopNav
    },
    methods: {

      updateSnackbar() {
        this.$store.commit('updateSnackbar', { show: false })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>