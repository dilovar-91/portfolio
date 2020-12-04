<template>
  <v-row>
    <v-col
      v-for="item in services"
      :key="item.title"
      cols="12"
      md="6"
      xl="6"
      sm="12"
    >
      <div data-aos="fade-down">
        <v-card class="mx-auto" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle class="mb-1 font-weight-bold">
                {{ item.title }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="120"
              ><v-img :src="item.image"
            /></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: (vm) => ({
    services: [
      {
        title: vm.$t('web_development'),
        text: vm.$t('web_development_description'),
        image: '/dev.jpg',
      },
      {
        title: vm.$t('designing'),
        text: vm.$t('designing_description'),
        image: '/designing.jpg',
      },
      {
        title: vm.$t('ecommerce'),
        text: vm.$t('ecommerce_description'),
        image: '/ecommerce.jpg',
      },
      {
        title: vm.$t('consulting'),
        text: vm.$t('consulting_description'),
        image: '/consulting.png',
      },
    ],
  }),
}
</script>

<i18n>
{
  "en": {
    "web_development": "Web Development",
    "designing": "Designing Website Layout & logo",
    "ecommerce": "E-commerce development",
    "consulting": "IT Consulting"
  },
  "ru": {
    "web_development": "Веб-разработка",
    "designing": "Верстка сайта",
    "ecommerce": "Разработка интернет магазина",
    "consulting": "IT Консультации"
  },
  "tj": {
    "web_development": "Коркарди WEB лоиха",
    "designing": "Тархи сомона",
    "ecommerce": "Коркарди интернет-магоза",
    "consulting": "Маслихати мутахассис"
  },
  "de": {
    "web_development": "Web Entwicklung",
    "designing": "Entwerfen",
    "ecommerce": "Ecommerce",
    "consulting": "IT Beratung"
  }
}
</i18n>
