<template>
  <header class="site-header">
    <div class="site-header__wrapper">
      <router-link class="site-header__icon" :to="{ name: 'Home' }">
        <img src="../assets/apple_logo.svg" alt="Agro-code">
      </router-link>
      <div class="site-header__links">
        <router-link
          class="site-header__link"
          active-class="site-header__link_active"
          :to="{ name: 'Upload' }"
        >
          Загрузить фото
        </router-link>
        <router-link
          class="site-header__link"
          active-class="site-header__link_active"
          :to="{ name: 'History' }"
        >
          История загрузок
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss" scoped>
@use "../styles/fonts";
@use "../styles/colors";

.site-header {
  display: flex;
  justify-content: center;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    height: 100px;
    padding: 0 30px;
  }
  &__icon {
    & > img {
      width: 50px;
    }
  }
  &__link {
    @include fonts.mo-med();
    font-size: 20px;
    color: colors.$text;
    text-decoration: none;
    &:not(:last-child) {
      margin-right: 50px;
    }
    &_active, &:hover {
      border-bottom: 2px solid colors.$text;
    }
  }
}

@media screen and (max-width: 767px) {
  .site-header {
    &__wrapper {
      height: 60px;
      padding: 0 15px;
    }
    &__icon {
      & > img {
        width: 30px;
      }
    }
    &__link {
      font-size: 14px;
      &:not(:last-child) {
        margin-right: 30px;
      }
      &_active, &:hover {
        border-bottom: 2px solid colors.$text;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .site-header {
    &__links {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    &__link {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 15px;
      }
      &_active, &:hover {
        border-bottom: 2px solid colors.$text;
      }
    }
  }
}
</style>