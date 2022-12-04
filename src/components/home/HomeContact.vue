<template>
  <div class="HomeContact" id="contact">
    <h3 class="homeHistory__title">Contact</h3>
    <form class="HomeContact__form" @submit="sendEmail">
      <div class="HomeContact__form__inputs">
        <Input
          class="HomeContact__form__name"
          placeholder="Nom"
          v-model="user.name"
        />
        <Input
          class="HomeContact__form__email"
          placeholder="Email"
          v-model="user.email"
        />
      </div>
      <Input
        class="HomeContact__form__message"
        placeholder="Message"
        v-model="user.message"
        textarea
      />
      <button class="HomeContact__form__button" @click="sendEmail">
        Envoyer
        <font-awesome-icon
          class="HomeContact__form__button__icon"
          icon="fa-solid fa-square-arrow-up-right"
        />
      </button>
    </form>
  </div>
</template>

<style lang="stylus">
.HomeContact
  background #fff
  padding rem(48)
  +media-down(1024)
    padding rem(48) rem(32)
  +media-down(640)
    padding rem(48) rem(16)

  &__title
    font-size rem(32)

  &__form
    max-width rem(1024)
    margin rem(32) auto 0

    &__inputs
      display flex
      +media-down(640)
        flex-direction column
      & > *
        width 100%

      & > :first-child
        margin-right rem(16)
        +media-down(640)
          margin-right 0
          margin-bottom rem(16)

    &__message
      margin-top rem(32)
      textarea
        height rem(128)


    &__button
      margin auto
      border none
      color white
      display flex
      cursor pointer
      font-size rem(20)
      font-family 'Open Sans'
      justify-content center
      align-items center
      background-color var(--color-text)
      padding rem(8) rem(32)
      margin-top rem(16)
      transition ease .2s background-color, ease .2s transform
      +media-down(640)
        font-size rem(18)
      &:hover
        background-color var(--color-text--hover)
        border-color #555
        transform translateY(-4px)
      &__icon
        top rem(1)
        margin-left rem(8)
        font-size rem(20)
        +media-down(640)
          font-size rem(16)
</style>

<script setup lang="ts">
import { ref } from 'vue';
import emailjs from 'emailjs-com';

import Input from '@/components/Input.vue';

const userDefaultValue = {
  name: '',
  email: '',
  message: '',
};
const user = ref(userDefaultValue);

const {
  VITE_EMAILJS_PUBLIC_KEY,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_SERVICE_ID,
} = import.meta.env;

function sendEmail(e: any) {
  e.preventDefault();
  try {
    emailjs.send(
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      user.value,
      VITE_EMAILJS_PUBLIC_KEY
    );
    alert('Le message a été envoyé avec succès');
  } catch (error) {
    console.log({ error });
    alert(error);
  }
  user.value = userDefaultValue;
}
</script>
