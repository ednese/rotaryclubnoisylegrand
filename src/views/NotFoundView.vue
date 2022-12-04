<template>
  <div class="NotFound">
    <p class="NotFound__text">Page introuvable</p>
    <RouterLink class="NotFound__link" to="/">Revenir sur la page principale</RouterLink>
  </div>
</template>
<style lang="stylus">
.NotFound
  color #fff
  display flex
  flex-direction column
  justify-content center
  align-items center
  height 100vh
  &__link:hover
    color #fff
    transition 200ms color
</style>