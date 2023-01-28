<template>
  <div class="HomeHeader" id="accueil">
    <div class="HomeHeader__controls">
      <div class="HomeHeader__controls__progress" />
      <div class="HomeHeader__controls__content">
        <div class="HomeHeader__controls__arrows">
          <font-awesome-icon
            v-for="i in 2"
            class="HomeHeader__controls__arrow"
            :class="
              'HomeHeader__controls__arrow--' + (i % 2) ? 'left' : 'right'
            "
            :icon="['fas', `arrow-${i % 2 ? 'left' : 'right'}-long`]"
            :key="i"
            @click="updateImageIndex(i % 2 ? -1 : 1)"
            @mousedown="lineAnimation = ''"
            @mouseup="lineAnimation = lineAnimationDefaultValue"
          />
        </div>
        <p class="HomeHeader__controls__count">
          {{ selectedImageIndex }}/{{ imagesNumber }}
        </p>
      </div>
    </div>
    <h1 class="HomeHeader__title">Rotary Club de Noisy-le-Grand</h1>
    <div class="HomeHeader__images">
      <div
        class="HomeHeader__image"
        v-for="i in imagesNumber"
        :style="getBackgroundImage(i)"
        :key="i"
      />
    </div>
  </div>
</template>

<style lang="stylus">
.HomeHeader
  position relative
  height 100vh
  display flex
  flex-direction column
  justify-content center
  align-items center
  +media-down(640)
    height 90vh

  &__title
    user-select none
    color #fff
    font-size rem(64)
    font-weight 700
    +media-down(1024)
      font-size rem(48)
      text-align center
      padding rem(16)
    +media-down(640)
      font-size rem(40)

  &__controls
    left 0
    height 30%
    display flex
    bottom rem(64)
    padding rem(16)
    position absolute
    background rgba(30,40,59,.5)
    backdrop-filter blur(15px)
    +media-down(1024)
      width 50%
      justify-content space-between
    +media-down(640)
      width 100%
      bottom 0

    &__progress
      height 100%
      width 1px
      overflow hidden
      margin 0 rem(32) 0 rem(8)
      background rgba(255,255,255,.2)
      &:before
        content ''
        background #fff
        width 100%
        height 100%
        position absolute
        transform translateY(100%)
        animation v-bind(lineAnimation)

    &__arrow
      color #fff
      cursor pointer
      height rem(16)
      width rem(32)
      margin rem(8)
      padding rem(12)
      border solid 1px rgba(255,255,255,.2)
      border-radius rem(64)
      &:hover
        background rgba(255,255,255,.1)

    &__content
      height 100%
      display flex
      flex-direction column
      align-items center
      justify-content space-between

    &__arrows
      display flex
      flex-direction column

    &__count
      user-select none
      color rgba(255,255,255,.5)

  &__images
    width 100%
    height 100%
    position absolute
    pointer-events none

  &__image
    z-index -1
    position absolute
    left 0
    width 100%
    height 100%
    filter brightness(.5)
    background-size cover
    background-position center
    transition 300ms opacity
    +media-down(640)
      background-position var(--background-position)

@keyframes slideUp {
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
}
</style>

<script setup lang="ts">
import { ref, watch } from 'vue';

const imagesNumber = 3;
const intervalTime = 8000;
const lineAnimationDefaultValue = '8s linear infinite forwards slideUp';
const selectedImageIndex = ref(1);
const lineAnimation = ref(lineAnimationDefaultValue);

let intervalID = setInterval(() => updateImageIndex(1), intervalTime);

function updateImageIndex(number: number) {
  if (selectedImageIndex.value + number < 1) {
    selectedImageIndex.value = imagesNumber;
  } else if (selectedImageIndex.value + number > imagesNumber) {
    selectedImageIndex.value = 1;
  } else {
    selectedImageIndex.value += number;
  }
}

function getBackgroundImage(index: number) {
  return {
    backgroundImage: `url(/images/home/${index}.jpg)`,
    opacity: selectedImageIndex.value === index ? 1 : 0,
    '--background-position':
      selectedImageIndex.value === 1
        ? 'center'
        : selectedImageIndex.value === 2
        ? 'right'
        : 'left',
  };
}

watch(selectedImageIndex, () => {
  clearInterval(intervalID);
  intervalID = setInterval(() => updateImageIndex(1), intervalTime);
});
</script>
