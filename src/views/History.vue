<template>
  <main class="history">
    <div class="history__wrapper">
      <div class="filter history__filter">
        <span class="filter__title">Показать:</span>
        <div class="filter__group">
          <label
            class="filter__option"
            :class="{ 'filter__option_selected': selectedFilter === 0 }"
          >
            Все<input
              name="filter"
              type="radio"
              value="0"
              v-model.number="selectedFilter"
              :checked="selectedFilter === 0"
            >
          </label>
          <label
            class="filter__option"
            :class="{ 'filter__option_selected': selectedFilter === 1 }"
          >
          Здоровые<input
              name="filter"
              type="radio"
              value="1"
              v-model.number="selectedFilter"
              :checked="selectedFilter === 1"
            >
          </label>
          <label
            class="filter__option"
            :class="{ 'filter__option_selected': selectedFilter === 2 }"
          >
            Больные<input
              name="filter"
              type="radio"
              value="2"
              v-model.number="selectedFilter"
              :checked="selectedFilter === 2"
            >
          </label>
        </div>
      </div>
      <div class="history__requests">
        <request-card
          v-for="request in requests"
          :key="request.id"
          :state="request.state"
          :img="request.img"
        ></request-card>
      </div>
    </div>
  </main>
</template>

<script>
import RequestCard from '../components/RequestCard'

export default {
  name: 'History',
  components: {
    RequestCard
  },
  data() {
    return {
      selectedFilter: 0,
      requests: [
        { id: '1', state: 'loading', img: ''},
        { id: '2', state: 'ill', img: ''},
        { id: '3', state: 'healthy', img: ''},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/fonts";
@use "../styles/colors";

.history {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  &__wrapper {
    width: 100%;
    max-width: 1280px;
    padding: 0 30px;
  }
  &__filter {
    margin-top: 30px;
  }
  &__requests {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    column-gap: 70px;
    row-gap: 40px;
    margin-top: 50px;
  }
}

.filter {
  &__title {
    @include fonts.mo-med();
    font-size: 24px;
    margin-right: 40px;
  }
  &__group {
    display: inline-block;
  }
  &__option {
    @include fonts.mo-med();
    font-size: 24px;
    padding: 5px 10px;
    &_selected {
      border-radius: 10px;
      background-color: colors.$illum;
    }
    &:not(:last-of-type) {
      margin-right: 30px;
    }
    & > input[type="radio"] {
      display: none;
    }
  }
}

@media screen and (max-width: 767px) {
  .history {
    &__wrapper {
      padding: 0 15px;
    }
    &__filter {
      margin-top: 20px;
    }
    &__requests {
      margin-top: 35px;
    }
  }
  .filter {
    display: flex;
    justify-content: space-between;
    &__title {
      font-size: fonts.calcFluidFontSize(15px, 24px, 375px, 767px);
      margin-right: 0;
    }
    &__option {
      font-size: fonts.calcFluidFontSize(15px, 24px, 375px, 767px);
      padding: 2px 5px;
      border-radius: 5px;
      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .filter {
    flex-direction: column;
    align-items: flex-start;
    &__title {
      margin-bottom: 10px;
    }
  }
}

</style>