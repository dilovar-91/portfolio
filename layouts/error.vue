<template>
  <v-app>
    <v-main>
      <v-container fluid class="mx-auto">
        <v-container fluid class="mt-0">
          <v-row align="center">
            <v-col cols="12" align="center">
              <img
                v-if="error.statusCode === 404"
                height="300vh"
                src="/error-404.png"
              />
              <img v-else height="300vh" src="/crash.png" />
              <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
              <h1 v-else>{{ otherError }}</h1>
              <v-btn color="primary" class="mt-2" to="/"
                ><v-icon>mdi-home</v-icon> Go Home</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      srgherherthreht: 123,
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
