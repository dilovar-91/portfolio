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
            <v-card rounded>
              <v-app-bar color="white">
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-btn icon rounded
                  ><a
                    href="https://github.com/dilovar-91"
                    target="_blank"
                    class="link"
                    ><v-icon color="black darken-4">mdi-github</v-icon></a
                  ></v-btn
                >
                <v-btn icon rounded
                  ><a
                    href="https://www.facebook.com/azimovdilovar"
                    target="_blank"
                    class="link"
                    ><v-icon color="light-blue darken-4"
                      >mdi-facebook</v-icon
                    ></a
                  ></v-btn
                >
                <v-btn icon rounded
                  ><a href="https://www.instagram.com/dilovar09" target="_blank"
                    ><v-icon color="orange">mdi-instagram</v-icon></a
                  ></v-btn
                >
                <v-btn icon rounded
                  ><a
                    href="https://www.linkedin.com/in/azimov-dilovar"
                    target="_blank"
                    ><v-icon color="light-blue darken-2"
                      >mdi-linkedin</v-icon
                    ></a
                  ></v-btn
                >
                <v-btn icon rounded
                  ><a href="https://wa.me/+79197241539" target="_blank"
                    ><v-icon color="success">mdi-whatsapp</v-icon></a
                  >
                </v-btn>
                <v-btn icon rounded
                  ><a href="https://t.me/dilovar09" target="_blank"
                    ><v-icon color="blue">mdi-telegram</v-icon></a
                  >
                </v-btn>
                <template v-slot:extension>
                  <v-tabs v-model="model" centered slider-color="yellow">
                    <v-tab :href="`#tab-about`"> {{ $t('about_me') }} </v-tab>
                    <v-tab :href="`#tab-portfolio`">
                      {{ $t('portfolio') }}
                    </v-tab>
                    <v-tab :href="`#tab-hire`"> {{ $t('hire_me') }} </v-tab>
                  </v-tabs>
                </template>
              </v-app-bar>

              <v-tabs-items v-model="model">
                <v-tab-item :value="'tab-about'">
                  <v-card flat>
                    <v-card-text>
                      <v-expansion-panels v-model="panel" multiple flat>
                        <v-expansion-panel>
                          <v-expansion-panel-header
                            ><span class="primary--text font-weight-bold">{{
                              $t('about_me')
                            }}</span></v-expansion-panel-header
                          >
                          <v-expansion-panel-content>
                            <p class="text-justify">
                              {{ $t('about_me_full') }}
                            </p>
                            <p class="text--body-1 font-weight-bold">
                              {{ $t('github_activity') }}
                            </p>
                            <a
                              href="https://github.com/dilovar-91"
                              target="_blank"
                            >
                              <v-img
                                src="https://ghchart.rshah.org/dilovar-91"
                                alt="My Github chart"
                            /></a>
                          </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                          <v-expansion-panel-header
                            ><span class="primary--text font-weight-bold">{{
                              $t('skills')
                            }}</span></v-expansion-panel-header
                          >
                          <v-expansion-panel-content>
                            <template v-for="skill in skills">
                              <v-progress-linear
                                :key="skill.item"
                                :value="skill.score"
                                rounded
                                :color="skill.color"
                                height="25"
                                class="mb-2 white--text"
                              >
                                <template v-slot:default>
                                  <strong>{{ skill.item }}</strong>
                                </template>
                              </v-progress-linear>
                            </template>
                          </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                          <v-expansion-panel-header
                            ><span class="primary--text font-weight-bold">{{
                              $t('services')
                            }}</span></v-expansion-panel-header
                          >
                          <v-expansion-panel-content>
                            <Services />
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item :value="'tab-portfolio'">
                  <div data-aos="slide-up" data-aos-easing="ease">
                    <v-card flat>
                      <v-card-text><Portfolio /></v-card-text>
                    </v-card>
                  </div>
                </v-tab-item>
                <v-tab-item :value="'tab-hire'">
                  <v-card flat>
                    <v-card-text><Contact /></v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
import Portfolio from '@/components/PortfolioComponent'
import Contact from '@/components/ContactComponent'
import Sidebar from '@/components/SidebarComponent'
import Services from '@/components/ServicesComponent'
export default {
  components: { Portfolio, Contact, Sidebar, Services },
  data: () => ({
    panel: [0, 1, 2],
    model: null,
    tabs: null,
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
    availableLocales() {
      return this.$i18n.locales
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
    "about_me_full": "Hello. My name is Dilovar Azimov. I am a Full Stack developer at Pilot Auto(https://pilot-auto77.ru). I have 2 years of experience in the IT industry. My tech stack is PHP (Laravel), Vue.Js, Nuxt.Js, Mysql, Nginx, Vuetify etc.",
    "github_activity": "Contribution activity in Github"
  },
  "ru": {
    "about_me": "Обо мне",
    "skills": "Навыки",
    "services": "Услуги",
    "portfolio": "Портфолио",
    "hire_me": "Наймите меня",
    "about_me_full": "Здравствуйте. Меня зовут Диловар Азимов. Я являюсь Full-Stack разработчиком  в автосалоне Пилот Авто (https://pilot-auto77.ru). Имею 2-летний опыт работы в ИТ-индустрии. Стек технологии которые я пользую: PHP (Laravel), Vue.Js, Nuxt.Js, Mysql, Nginx, Vuetify и т. д.",
    "github_activity": "Активность в Github"
  },
  "tj": {
    "about_me": "Оиди ман",
    "skills": "Кобилият",
    "services": "Хизматрасониҳо",
    "portfolio": "Портфолио",
    "hire_me": "Маро киро кунед",
    "about_me_full": "Салом. Номи ман Диловар Азимов. Айни хол ба сифати Full-Stack барномасоз кор ва фаъолият менамоям. Таҷрибаи кории ман зиёда аз 2 сол мебошад. Банда хатмкардаи ДПДТТ ба номи М.Осими буда чунин технологияхоро истифода мебарам: PHP (Laravel), Vue.Js, Nuxt.Js, Mysql, Nginx, Vuetify ва ғайра.",
    "github_activity": "Фаъолноки дар Github"
  },
  "de": {
    "about_me": "Über mich",
    "skills": "Kompetenzen",
    "services": "Dienstleistungen",
    "portfolio": "Portefeuille",
    "hire_me": "Stellt mich ein",
    "about_me_full": "Hallo. Ich heiße Dilovar Azimov. Ich bin ein Full Stack-Entwickler bei Pilot Auto. Ich habe 2 Jahre Erfahrung in der IT-Branche. Mein Technologie-Stack ist PHP (Laravel), Vue.Js, Nuxt.Js, Mysql, Nginx, Vuetify usw.",
    "github_activity": "Beitragsaktivität in Github"
  }
}
</i18n>
