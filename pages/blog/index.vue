<template>
  <v-container>
    <v-col cols="12" xl="9" class="mx-auto">
      <v-row>
        <v-col cols="12" sm="6" lg="3" xl="3">
          <div data-aos="flip-up">
            <Sidebar />
          </div>
        </v-col>
        <v-col cols="12" md="8" xl="9" sm="12">
          <div data-aos="fade-up">
            <v-row>
              <v-col
                v-for="i in 12"
                :key="i"
                class="pt-0"
                cols="6"
                md="6"
                sm="12"
                xs="12"
                xl="4"
              >
                <v-card class="mx-auto">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      :to="
                        localePath({
                          path: `/blog/${i}`,
                        })
                      "
                      color="orange"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn color="orange" text> Explore </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
import Sidebar from '@/components/SidebarComponent'
export default {
  components: { Sidebar },
  data: () => ({}),
  head() {
    return {
      title: 'Personal blog',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My personal blog (Dilovar Azimov)',
        },
      ],
    }
  },
}
</script>
