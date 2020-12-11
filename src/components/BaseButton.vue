<template>
  <button 
    @click="$emit('click')"
    class="base-button"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      requred: false,
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/fonts";
@use "../styles/colors";

.base-button {
  @include fonts.mo-bold();
  padding: 20px 50px;
  font-size: fonts.calcFluidFontSize(22px, 26px, 375px, 1440px);
  color: colors.$text;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: colors.$illum;
  outline: none;
}
</style>