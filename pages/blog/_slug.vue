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
            <v-card class="mx-auto">
              <v-img
                class="white--text align-end"
                height="45vh"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

              <v-card-text class="text--primary">
                <v-icon large color="blue" left> mdi-translate </v-icon>
                <span class="title font-weight-light"> Русский</span>
                <div>Whitehaven Beach</div>

                <div>
                  Webpack Assets By default, Nuxt uses webpack's vue-loader,
                  file-loader and url-loader to serve your assets. You can also
                  use the static directory for assets that should not run
                  through webpack Webpack vue-loader automatically processes
                  your style and template files with css-loader and the Vue
                  template compiler out of the box. In this compilation process,
                  all asset URLs such as , background: and CSS @import are
                  resolved as module dependencies. For example, we have this
                  file tree:
                </div>
                <div>
                  Webpack Assets By default, Nuxt uses webpack's vue-loader,
                  file-loader and url-loader to serve your assets. You can also
                  use the static directory for assets that should not run
                  through webpack Webpack vue-loader automatically processes
                  your style and template files with css-loader and the Vue
                  template compiler out of the box. In this compilation process,
                  all asset URLs such as , background: and CSS @import are
                  resolved as module dependencies. For example, we have this
                  file tree:
                </div>
              </v-card-text>
            </v-card>
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
  data: () => ({
    messages: [
      {
        from: 'From',
        message: `Sure, I'll see you later.`,
        time: '10:42am',
        color: 'deep-purple lighten-1',
      },
      {
        from: 'John Doe',
        message: 'Yeah, sure. Does 1:00pm work?',
        time: '10:37am',
        color: 'green',
      },
      {
        from: 'You',
        message: 'Did you still want to grab lunch today?',
        time: '9:47am',
        color: 'deep-purple lighten-1',
      },
    ],
    panel: [0, 1],
    model: null,
    tabs: null,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    skill: 20,
    knowledge: 33,
    power: 78,
    skills: [
      {
        item: 'PHP / Laravel',
        score: 90,
        color: 'primary',
      },
      {
        item: 'Vue.Js / Nuxt.js',
        score: 90,
        color: 'green accent-3',
      },
      {
        item: 'BootStrap / Vuetify / FlexBox',
        score: 95,
        color: 'blue',
      },
      {
        item: 'Docker / Git / Nginx / PM2 / Webpack',
        score: 85,
        color: 'deep-orange',
      },
      {
        item: 'MySQL / PostgreSQL',
        score: 90,
        color: 'light-green',
      },
    ],
  }),
  computed: {
    locale() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)
    },
  },
  head() {
    return this.$nuxtI18nSeo()
  },
}
</script>
<i18n>
{
  "en": {
    "about_me": "About Me",
    "skills": "Skills",
    "services": "Services",
    "portfolio": "Portfolio",
    "hire_me": "Hire Me",
    "about_me_full": "Hello. My name is Dilovar Azimov. I am a Full Stack developer at Pilot Auto. I have 2 years of experience in the IT industry. My technology stack is Laravel, Nuxt.Js, Vue.Js Mysql, Nginx, Vuetify etc."
  },
  "ru": {
    "about_me": "Обо мне",
    "skills": "Навыки",
    "services": "Услуги",
    "portfolio": "Портфолио",
    "hire_me": "Наймите меня",
    "about_me_full": "Здравствуйте. Меня зовут Диловар Азимов. Я разработчик Full Stack в Pilot Auto. Имею 2-летний опыт работы в ИТ-индустрии. Мой технологический стек - Laravel, Nuxt.Js, Vue.Js Mysql, Nginx, Vuetify и т. д."
  },
  "tj": {
    "about_me": "Оиди ман",
    "skills": "Кобилият",
    "services": "Хизматрасониҳо",
    "portfolio": "Портфолио",
    "hire_me": "Маро киро кунед",
    "about_me_full": "Салом. Номи ман Диловар Азимов. Айни хол ман ба сифати Stack-Full барномасоз кор ва фаъолият менамоям. Таҷрибаи кории ман зиёда аз 2 сол мебошад. Банда хатмкардаи ДПДТТ ба номи М.Осими буда чунин технологияхоро истифода мебарам: PHP (Laravel), Vue.Js, Nuxt.Js, Mysql, Nginx, Vuetify ва ғайра."
  },
  "de": {
    "about_me": "Über mich",
    "skills": "Kompetenzen",
    "services": "Dienstleistungen",
    "portfolio": "Portefeuille",
    "hire_me": "Stellt mich ein",
    "about_me_full": "Hallo. Ich heiße Dilovar Azimov. Ich bin ein Full Stack-Entwickler bei Pilot Auto. Ich habe 2 Jahre Erfahrung in der IT-Branche. Mein Technologie-Stack ist Laravel, Nuxt.Js, Vue.Js MySQL, Nginx, Vuetify usw."
  }
}
</i18n>
