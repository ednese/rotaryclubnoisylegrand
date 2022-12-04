<template>
  <div class="App">
    <Nav />
    <main><RouterView /></main>
    <Footer />
  </div>
</template>

<style lang="stylus">
</style>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
</script>
