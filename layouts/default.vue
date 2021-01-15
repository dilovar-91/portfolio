<template>
  <v-app>
    <v-main>
      <v-container>
        <v-layout>
          <nuxt />
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  head() {
    return this.$nuxtI18nSeo()
  },
}
</script>
