<template>
<div class="homeHistory" id="histoire">
  <h3 class="homeHistory__title">Histoire</h3>
  <div class="homeHistory__content">
    <img class="homeHistory__content__image" src="/images/home/inauguration_rotary_1924.jpg"/>
    <p class="homeHistory__content__text">Le Rotary est né le 23 février 1905 sur l’initiative de Paul HARRIS, par la création du premier club à Chicago. En 1921, le Rotary Club de Paris est fondé, constituant, ainsi, le premier club rotarien de France. Ce dernier sera suivi, deux ans plus tard, par deux nouveaux clubs : Toulouse et Lyon.<br/><br/><b>Le 31 mai 1997</b>, le club de Noisy-le-Grand voit le jour, et prospère petit-à-petit au travers d'actions locales à Noisy-le-Grand, nationales avec d'autres clubs, internationales avec notamment la stérilisation d'hôpitaux menée à Madagascar.</p>
  </div>
</div>
</template>

<style lang="stylus">
.homeHistory
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
      +media-down(640)
        max-width 100%
    &__text
      margin-left rem(32)
      max-width rem(640)
      +media-down(1024)
        margin-top rem(32)
        margin-left 0
</style>
