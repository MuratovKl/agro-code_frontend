<template>
  <main class="home">
    <div class="home__wrapper">

      <!-- Home title -->
      <h1 class="home__title home__title_desktop">
        Нейросеть для обнаружения<br>
        заболеваний листьев яблони<br>
        по&nbsp;фотографии
      </h1>
      <h1 class="home__title home__title_mobile" v-html="'Нейросеть для обнаружения заболеваний листьев яблони по&nbsp;фотографии'"></h1>

      <!-- How it works -->
      <h2 class="home__how-title">Как это работает:</h2>
      <div class="how-to home__how-bullets">
        <div class="how-to__item">
          <img class="how-to__number" src="../assets/number1_icon.svg">
          <p class="how-to__text" v-html="'Сделайте фотографию листа яблони. Чем лучше лист различим в&nbsp;кадре, тем точнее нейросеть сможет определить заболевание'"></p>
        </div>
        <div class="how-to__item">
          <img class="how-to__number" src="../assets/number2_icon.svg">
          <p class="how-to__text">
            С&nbsp;помощью 
            <router-link 
              class="how-to__link"
              :to="{ name: 'Upload' }"
            >
              формы
            </router-link> 
            загрузите фотографию в&nbsp;систему
          </p>
        </div>
        <div class="how-to__item">
          <img class="how-to__number" src="../assets/number3_icon.svg">
          <p class="how-to__text">
            Нейросеть проанализирует изображение и&nbsp;определит больно&nbsp;ли дерево
          </p>
        </div>
      </div>
      <base-button class="home__btn" @click="$router.push({ name: 'Upload' })">Начать</base-button>
    </div>
  </main>
</template>

<script>
import BaseButton from '../components/BaseButton'

export default {
  name: 'Home',
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/fonts";
@use "../styles/colors";

.home {
  display: flex;
  justify-content: center;
  &__wrapper {
    width: 100%;
    max-width: 1280px;
    padding: 0 30px;
  }
  &__title {
    @include fonts.mo-bold();
    margin-top: 30px;
    font-size: fonts.calcFluidFontSize(24px, 48px, 375px, 1440px);
    line-height: 130%;
    &_mobile {
      display: none;
    }
  }
  &__how-title {
    @include fonts.mo-bold();
    margin-top: 50px;
    font-size: 36px;
  }
  &__how-bullets {
    margin-top: 25px;
  }
  &__btn {
    display: block;
    margin: 55px auto 0;
  }
}

.how-to {
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 50px;
  &__number {
    width: 70px;
    margin-bottom: 15px;
  }
  &__text {
    @include fonts.mo-reg();
    font-size: fonts.calcFluidFontSize(14px, 22px, 375px, 1440px);
    line-height: 130%;
  }
  &__link {
    color: colors.$link;
  }
}
</style>
