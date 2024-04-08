<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'Glossario',
  components: { AppHeader },
}
</script>
<template>
  <!-- header -->
  <AppHeader />
  <!-- header -->
  <main class="container my-5 ">
    <!-- qui ho le mie pagine  -->
    <RouterView/>
  </main>
</template>
<style lang='scss' scoped>
/* style here */
</style>