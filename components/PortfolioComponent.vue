<template>
  <v-hover v-slot="{ hover }">
    <v-carousel cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-expand-transition>
          <v-card
            v-if="hover"
            class="transition-fast-in-fast-out fill-height w-90 gradient-dark white--text d-grid text-center align-center"
            style="height: 100%"
          >
            <v-card-text justify="center" align="center">
              <v-row justify="center" align="center" class="mt-6">
                <v-col cols="12">
                  <div class="text-h6 font-weight-bold">
                    {{ item.title }}
                  </div>
                  <div class="align-content-stretch">
                    {{ item.description }}
                  </div>
                  <a
                    :href="item.link"
                    target="_blank"
                    class="font-weight-bold mt-3 white--text"
                    >{{ item.link }}</a
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-expand-transition>
      </v-carousel-item>
    </v-carousel>
  </v-hover>
</template>
<style scoped>
.gradient-dark {
  background: linear-gradient(
    45deg,
    rgba(10, 10, 10, 0.342),
    rgba(10, 10, 10, 0.342)
  );
}
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Внутренная CRM система',
          link: 'https://accas.ru',
          src: '/portfolio/accas_ru.png',
          description:
            'Внутренная CRM система (accas.ru), которая охватывает вес процесс работы автосалона,  включая call-center –a . Стек технологии: nuxt.js, laravel, vue.js, webpack, nginx, ,mysql, git, scss и т.д. На нём работают более 40 человек. Основные возможности: Управление контактами, новыми и поддержаними машинами, клиентами, оценка трейд-ин, экспорта списками в excel, разними ролями пользователей и их доступ к сраницам и т.д.',
        },
        {
          title: 'Сайт трудоустройство для моряков CrewMsg',
          link: 'https://crewmsg.com.ua',
          src: '/portfolio/oneclick_marine.png',
          description:
            'CrewMsg предоставляет весомые гарантии в трудоустройстве моряков. Мы пользуемся безупречной репутацией среди клиентов и партнеров. Возможности: запись интервью, добавление вакансии, отклик и приглашение на вакансии и т.д.',
        },
        {
          title: 'Интернет магазин орехов и сухофруктов',
          link: 'https://tajmarket.ru',
          src: '/portfolio/tajmarket_ru.png',
          description: 'Каталог  орехов и сухофруктов на платформе Opencart.',
        },
      ],
    }
  },
}
</script>
