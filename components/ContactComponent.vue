<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :label="$t('name')"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      :label="$t('email')"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[(v) => !!v || 'Item is required']"
      :label="$t('service')"
      required
    ></v-select>
    <v-textarea
      v-model="message"
      rows="2"
      :label="$t('message')"
      :rules="[(v) => !!v || 'Message is required']"
    />

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      {{ $t('send') }}
    </v-btn>
    <v-btn color="error" class="mr-4" @click="reset"> {{ $t('reset') }} </v-btn>
  </v-form>
</template>
<script>
export default {
  data: (vm) => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length > 3) || 'Name must be more than 3 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      vm.$t('landing'),
      vm.$t('website'),
      vm.$t('ecommerce'),
      vm.$t('crm'),
      vm.$t('other'),
    ],
    checkbox: false,
    message: vm.$t('your_project'),
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
<i18n>
{
  "en": {
    "name": "Name",
    "email": "Email",
    "service": "Service",
    "message": "Message",
    "send": "Send message",
    "reset": "Reset",
    "landing": "Landing",
    "website": "Website",
    "ecommerce": "Ecommerce",
    "crm": "CRM",
    "other": "Other",
    "your_project": "Your project or job"
  },
  "ru": {
    "name": "Ваше имя",
    "email": "Ваш Email",
    "service": "Услуга",
    "message": "Сообщение",
    "send": "Отправить",
    "reset": "Сброс",
    "landing": "Лендинг",
    "website": "Сайт",
    "ecommerce": "Интернет магазин",
    "crm": "CRM",
    "other": "Другой",
    "your_project": "Ваша идея или ТЗ"
  },
  "tj": {
    "name": "Номи Шумо",
    "email": "Email - и Шумо",
    "service": "Хизматрасони",
    "message": "Нома",
    "send": "Фиристодан",
    "reset": "Тоза кардан",
    "landing": "Лендинг",
    "website": "Сомона",
    "ecommerce": "Интернет-мағоза",
    "crm": "CRM",
    "other": "Дигар",
    "your_project": "Лоиҳа ё идеяи Шумо"
  },
  "de": {
    "name": "Ihr Name",
    "email": "deine E-Mail",
    "service": "Bedienung",
    "message": "Botschaft",
    "send": "Nachricht senden",
    "reset": "Zurücksetzen",
    "landing": "Landing",
    "website": "Webseite",
    "ecommerce": "E-Commerce",
    "crm": "CRM",
    "other": "Andere",
    "your_project": "Ihre Idee oder Ihr Projekt"
  }
}
</i18n>
