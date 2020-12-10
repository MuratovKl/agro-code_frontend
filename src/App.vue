<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
