<template>
  <div id="app">
    <site-header></site-header>
    <router-view/>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader'

export default {
  name: 'App',
  components: {
    SiteHeader
  }
}
</script>

<style lang="scss">
@use "./styles/font-faces";
@use "./styles/fonts";
@use "./styles/colors";
@use "./styles/reset";

#app {
  @include fonts.mo-reg();
  color: colors.$text;
}
</style>
