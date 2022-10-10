<template>
  <Navbar></Navbar>
  <Intro></Intro>
  <Main></Main>
</template>

<script>

import Navbar from "./components/HeaderComponent.vue";
import Intro from "./components/IntroComponent.vue";
import Main from "./components/MainComponent.vue";

export default {
  components: {
    Navbar,
    Intro,
    Main
  }
}
</script>

<style>

</style>