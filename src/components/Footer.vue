<template>
  <div class="Footer">
    <div class="Footer__content">
      <div class="Footer__text">
        <div class="Footer__routes">
          <a
            class="Footer__route"
            v-for="(section, index) in sections"
            :key="section + index"
            :href="'#' + section"
          >
            <p>{{ section }}</p>
          </a>
        </div>
        <p class="Footer__copyright">© {{ new Date().getFullYear() }} Rotary Club de Noisy-le-Grand. All rights reserved.</p>
        <div class="Footer__author"><a class="Footer__author" href="https://evansende.com" target="_blank">Integrated by Evan Sende</a></div>
      </div>
      <RouterLink to="/"><img class="Footer__logo" src="images/logo.png" /></RouterLink>
    </div>
  </div>
</template>

<style lang="stylus">
.Footer
  display flex
  padding rem(32)
  justify-content center
  background-color #f1f1f3
  +media-down(640)
    padding rem(16)

  &__content
    width 80%
    display flex
    align-items center
    justify-content space-between
    padding rem(32)
    background-color #fff
    border-radius rem(8)
    +media-down(1024)
      flex-direction column
      width 90%
    +media-down(640)
      width 100%

  &__logo
    order 1
    width rem(192)

  &__text
    +media-down(1024)
      margin-top rem(32)
      order 2
    +media-down(640)
      margin-top rem(16)

  &__routes
    display flex
    +media-down(1024)
      justify-content center
    +media-down(640)
      flex-direction column
      align-items center

  &__route
    margin-right rem(32)
    p
      font-weight 600
      text-transform capitalize
    +media-down(640)
      margin-right 0
      margin-top rem(8)

  &__copyright,
  &__author
    margin-top rem(16)
    font-weight 600

    +media-down(1024)
      display flex
      text-align center
      justify-content center
</style>

<script setup lang="ts">
import { sections } from '@/router';
</script>
