<template>
  <v-card class="mx-auto" rounded light>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">
          <v-btn icon class="mr-1" :to="localePath('/')"
            ><v-icon color="primary">mdi-home</v-icon></v-btn
          >
          {{ $t('my_name') }}
        </v-list-item-title>
        <v-list-item-subtitle class="grey--text text--darken-1 mb-2">
          {{ $t('profession') }}</v-list-item-subtitle
        ><v-list-item-subtitle
          ><v-btn-toggle
            v-model="toggle_exclusive"
            color="blue"
            class="ml-2 mt-2"
            background-color="success"
          >
            <v-btn
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              ><v-img width="28px" :src="locale.logo"
            /></v-btn> </v-btn-toggle
        ></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-skeleton-loader class="mx-auto" max-width="600" type="avatar"
      ><v-img :src="'/photo_2020.jpg'"></v-img
    ></v-skeleton-loader>

    <v-card-text class="pl-1">
      <v-timeline align-top dense class="pl-0">
        <v-timeline-item
          v-for="info in informations"
          :key="info.item"
          :color="info.color"
          small
          class="pl-0"
        >
          <div class="font-weight-normal">
            <strong class="primary--text">{{ info.item }}</strong> :
            <strong>{{ info.value }}</strong>
          </div>
        </v-timeline-item>
      </v-timeline>
      <v-btn
        outlined
        block
        class="mt-2 ml-1"
        color="success"
        @click="forceFileDownload()"
        ><v-icon class="mr-1">mdi-file-document-multiple</v-icon
        >{{ $t('resume') }}</v-btn
      >
      <v-btn
        v-if="false"
        outlined
        block
        class="mt-2 ml-1"
        color="success"
        :to="localePath('blog')"
        ><v-icon class="mr-1">mdi-blogger</v-icon>{{ $t('blog') }}</v-btn
      >
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: (vm) => ({
    informations: [
      {
        item: vm.$t('age'),
        value: 30,
        color: 'primary',
      },
      {
        item: vm.$t('from'),
        value: vm.$t('tajikistan'),
        color: 'green accent-3',
      },
      {
        item: vm.$t('live'),
        value: vm.$t('russia'),
        color: 'blue',
      },
      {
        item: vm.$t('degree'),
        value: vm.$t('bachelor'),
        color: 'deep-orange',
      },
      {
        item: vm.$t('experience'),
        value: vm.$t('experience_value'),
        color: 'light-green',
      },
    ],
    toggle_exclusive: 0,
    url: '/resume.pdf',
  }),
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
  methods: {
    forceFileDownload() {
      // const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = this.url
      link.setAttribute('download', 'resume_Azimov_D.pdf')
      link.setAttribute('target', '_blank') // or any other extension
      document.body.appendChild(link)
      link.click()
    },
  },
}
</script>

<i18n>
{
  "en": {
    "my_name": "Dilovar Azimov",
    "age": "Age",
    "from": "From",
    "tajikistan": "Tajikistan",
    "live": "Live",
    "russia": "Russia",
    "degree": "Degree",
    "bachelor": "Bachelor",
    "experience": "Experience",
    "experience_value": ">2 years",
    "profession": "Full Stack Developer",
    "resume": "Resume / CV",
    "blog": "Blog"
  },
  "ru": {
    "my_name": "Азимов Диловар",
    "age": "Возраст",
    "from": "Место рождения",
    "tajikistan": "Таджикистан",
    "live": "Проживание",
    "russia": "Россия",
    "degree": "Степень",
    "bachelor": "Бакалавр",
    "experience": "Опыт",
    "experience_value": ">2-х лет",
    "profession": "Full Stack Разработчик",
    "resume": "Резюме / CV",
    "blog": "Блог"
  },
  "tj": {
    "my_name": "Азимов Диловар",
    "age": "Синну сол",
    "from": "Чои таваллуд",
    "tajikistan": "Тоҷикистон",
    "live": "Чои истикомат",
    "russia": "Руссия",
    "degree": "Дараҷа",
    "bachelor": "Бакалавр",
    "experience": "Таҷриба",
    "experience_value": ">2 сол",
    "profession": "Full Stack Барномасоз",
    "resume": "Резюме / CV",
    "blog": "Блог"
  },
  "de": {
    "my_name": "Dilovar Azimov",
    "age": "Alter",
    "from": "Geburtsort",
    "tajikistan": "Tadschikistan",
    "live": "Wohnort",
    "russia": "Russland",
    "degree": "Abschluss",
    "bachelor": "Bachelor",
    "experience": "Erfahrung",
    "experience_value": ">2 Jahre",
    "profession": "Full Stack Entwickler",
    "resume": "Lebenslauf / CV",
    "blog": "Blog"
  }
}
</i18n>
