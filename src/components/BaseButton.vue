<template>
  <button 
    @click="$emit('click')"
    class="base-button"
    :class="{ 'base-button_error': status === 'error', 'base-button_success': status === 'success',}"
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
      required: false,
      type: String,
      default: 'button'
    },
    status: {
      required: false,
      type: String,
      default: ''
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
  border-radius: 10px;
  background-color: colors.$illum;
  outline: none;
  transition: all 200ms ease;
  cursor: pointer;
  &_error {
    background-color: colors.$lightRed;
  }
  &_success {
    background-color: colors.$green;
  }
}
</style>