<template>
<div class="HomeInfos" id="infos">
  <h3 class="HomeInfos__title">Informations</h3>
  <div class="HomeInfos__content">
    <img class="HomeInfos__content__image" src="images/home/novotel.jpg"/>
    <div class="HomeInfos__content__infos">
      <div class="HomeInfos__content__info" v-for="info in infos" :key="info.name">
        <a :href="info?.url" target="_blank">
          <font-awesome-icon
            class="HomeInfos__content__info__icon"
            :icon="['fas', info.icon]"
          />
          <h4 class="HomeInfos__content__info__name">{{info.name}}</h4>
          <p class="HomeInfos__content__info__text">{{info.text}}</p>
        </a>
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
      +media-down(1580)
        max-width 60%
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
        +media-down(640)
          font-size rem(14)
</style>

<script setup lang="ts">
import { computed } from 'vue';

const infos = [
  {
    name: 'Lieu de réunion',
    text: 'Hôtel Novotel Marne-la-Vallée 2,\nallée Bienvenue 93160, NOISY-LE-GRAND',
    icon: 'map-location-dot',
  },
  {
    name: 'Dates',
    text: 'Réunion tous les jeudis à 20h00\nRéunion statutaire les 1er et 3ème jeudis du mois',
    icon: 'calendar-days',
  },
  {
    name: 'Actualitées',
    text: 'Retrouvez notre actualité sur FACEBOOK',
    url: 'https://www.facebook.com/rotaryclubnoisylegrand',
    icon: 'newspaper',
  },
  {
    name: 'Contact',
    text: `Nous sommes joignables sur l'adresse email:\n"contact@rotaryclubnoisylegrand.org"`,
    url: 'mailto:contact@rotaryclubnoisylegrand.org',
    icon: 'envelope',
  },
]
</script>
