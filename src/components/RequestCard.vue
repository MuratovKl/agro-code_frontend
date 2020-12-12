<template>
  <div class="request-card">
    <img v-show="img" class="request-card__img" :src="img">
    <div
      class="request-card__condition"
      :class="`request-card__condition_${state}`"
    >
      <p class="request-card__state">{{ cardText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequestCard',
  props: {
    state: {
      required: true,
      type: String,
      default: 'loading'
    },
    img: {
      required: false,
      type: String,
      default: ''
    }
  },
  computed: {
    cardText() {
      if (this.state === 'loading') {
        return 'В обработке...'
      } else if (this.state === 'ill') {
        return 'Есть заболевание'
      } else {
        return 'Все в порядке'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/fonts";
@use "../styles/colors";

.request-card {
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 20px;
  background-color: colors.$graye;
  overflow: hidden;
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__condition {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
    &_loading {
      background-color: colors.$grayc5;
    }
    &_ill {
      background-color: colors.$lightRed;
    }
    &_healthy {
      background-color: colors.$green;
    }
  }
  &__state {
    @include fonts.mo-med();
    font-size: 18px;
    color: white;
    text-align: center;
  }
}
</style>