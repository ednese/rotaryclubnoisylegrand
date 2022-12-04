<template>
  <div class="Nav" :class="navClass">
    <RouterLink class="Nav__logo" to="/"
      ><img :src="`/images/logo${hasBackground ? '' : '-white'}.png`"
    /></RouterLink>
    <div
      class="Nav__burger"
      @click="burgerIsOpen = !burgerIsOpen"
    />
    <div class="Nav__routes">
      <a
        class="Nav__route"
        v-for="(section, index) in sections"
        :key="section + index"
        :href="'#' + section"
      >
        <p>{{ section }}</p>
      </a>
    </div>
  </div>
</template>

<style lang="stylus">
.Nav
  z-index 1
  width 100%
  display flex
  position fixed
  height rem(86)
  align-items center
  padding rem(16) rem(64)
  transition 200ms background-color, 200ms box-shadow

  &__burger
    height rem(16)
    width rem(24)
    &:after,
    &:before
      position absolute
      width 100%
      height 100%
      background #fff
      height rem(2)
      transition 200ms transform
    &:after
      top 0
    &:before
      bottom 0

    &--open
      &:after
        transform rotate(45deg) translateY(500%)
      &:before
        transform rotate(-45deg) translateY(-500%)

  &--background
    background #fff
    box-shadow 0px rem(8) rem(64) rgba(0,0,0,.2)

    .Nav__route > p
      color #2b4f93

    .Nav__burger
      &:after,
      &:before
        background #2b4f93

  &__logo
    height 100%
    img
      height 100%

  &__routes
    left 50%
    display flex
    position absolute
    transform translateX(-50%)

  &__route
    margin 0 rem(32)
    p
      color #fff
      font-weight 600
      text-transform capitalize

  &__burger
    height rem(16)
    width rem(24)
    &:after,
    &:before
      position absolute
      width 100%
      height 100%
      background #fff
      height rem(2)
      transition 200ms transform
    &:after
      top 0
    &:before
      bottom 0

  &--open
    .Nav__burger
      &:after
        transform rotate(45deg) translateY(500%)
      &:before
        transform rotate(-45deg) translateY(-500%)

+media-down(1024)
  .Nav
    justify-content space-between
    &__routes
      opacity 0
      top calc(100%)
      background white
      padding rem(16)
      pointer-events none
      border-radius rem(4)
      transition 300ms transform, opacity 300ms
      box-shadow 0px rem(8) rem(64) rgba(0,0,0,.4)

    &__route p
      color #2b4f93

    &__burger
      cursor pointer
      &:after,
      &:before
        content ''

    &--open
      .Nav__routes
        opacity 1
        pointer-events auto
        transform translate(-50%, 32px)

+media-down(640)
  .Nav__routes
    flex-direction column
  .Nav__route:not(:first-child)
    margin-top rem(16)
</style>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useEventListener } from '@vueuse/core';

import { sections } from '@/router';

const hasBackground = ref(false);
const burgerIsOpen = ref(false);

const navClass = computed(
  () =>
    (hasBackground.value ? ' Nav--background' : '') +
    (burgerIsOpen.value ? ' Nav--open' : '')
);
useEventListener(window, 'scroll', e => {
  hasBackground.value = !!window.scrollY;
});
</script>
