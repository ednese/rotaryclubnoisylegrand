<template>
<div class="HomeInfos" id="infos">
  <h3 class="HomeInfos__title">Informations</h3>
  <div class="HomeInfos__content">
    <img class="HomeInfos__content__image" src="/images/home/novotel-rotary.jpg"/>
    <div class="HomeInfos__content__infos">
      <div class="HomeInfos__content__info" v-for="info in infos" :key="info.name">
        <font-awesome-icon
          class="HomeInfos__content__info__icon"
          :icon="['fas', info.icon]"
        />
        <h4 class="HomeInfos__content__info__name">{{info.name}}</h4>
        <p class="HomeInfos__content__info__text" v-html="info.text" />
      </div>
    </div>
  </div>
</div>
</template>

<style lang="stylus">
.HomeInfos
  background #fff
  padding rem(48)
  +media-down(1024)
    padding rem(48) rem(32)
  +media-down(640)
    padding rem(48) rem(16)

  &__title
    font-size rem(32)
  &__content
    display flex
    align-items center
    margin-top rem(32)
    justify-content center
    +media-down(1024)
      flex-direction column
    &__image
      max-width rem(720)
      +media-down(1580)
        max-width 50%
      +media-down(1024)
        max-width 100%

    &__infos
      margin-left rem(64)
      +media-down(1580)
        margin-left rem(32)
      +media-down(1024)
        margin-top rem(32)
        margin-left 0

    &__info
      white-space pre-line
      &:not(:last-child)
        margin-bottom rem(32)
        +media-down(640)
          margin-bottom rem(16)
      &__icon
        font-size rem(32)
        +media-down(640)
          font-size rem(24)
      &__name
        font-size rem(20)
        font-weight 500
        +media-down(640)
          font-size rem(18)
      &__text
        font-size rem(16)
        a
          text-decoration underline
        +media-down(640)
          font-size rem(14)
</style>

<script setup lang="ts">
const infos = [
  {
    name: 'Adresse postale',
    text: `Hôtel Novotel Marne-la-Vallée 2,
            allée Bienvenue 93160, NOISY-LE-GRAND
            <a href="tel:+33180000000">Tel 01.80.00.00.00</a>
    `,
    icon: 'map-location-dot',
  },
  {
    name: 'Dates',
    text: `Tous les jeudis à 20h00
            En présentiel au Novotel ou à la Maison des Associations
            En visioconférence le 3ème jeudi du mois
            N'hésitez pas à <a href="#contact">nous contacter</a>
    `,
    icon: 'calendar-days',
  },
  {
    name: 'Actualités',
    text: 'Retrouvez notre actualité sur <a href="https://www.facebook.com/rotaryclubnoisylegrand" target="_blank">FACEBOOK</a>',
    icon: 'newspaper',
  },
  // {
  //   name: 'Contacte',
  //   text: `Nous sommes joignables sur l'adresse email:\n"contact@rotaryclubnoisylegrand.org"`,
  //   url: 'mailto:contact@rotaryclubnoisylegrand.org',
  //   icon: 'envelope',
  // },
]
</script>
