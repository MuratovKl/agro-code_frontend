<template>
  <main class="upload">
    <div class="upload__wrapper">
      <div class="upload__info">
        <h1 class="upload__title">Загрузите фотографию листа яблони</h1>
        <h2 class="upload__rules-title">Важно:</h2>
        <ol class="upload__rules">
          <li class="upload__rule" v-html="'Можно загружать фотографии в&nbsp;форматах jpg и&nbsp;png'"></li>
          <li class="upload__rule" v-html="'Размер файла не&nbsp;должен превышать 20&nbsp;Mb'"></li>
        </ol>
      </div>
      <validation-observer slim ref="form">
        <form
          novalidate
          class="upload__form"
          @submit.prevent="submitForm"
        >
          <validation-provider
            slim
            vid="nomakeup1"
            rules="required|image|size:20480"
            v-slot="{ errors }"
          >
            <image-input
              v-model="image"
              :error="errors.length > 0"
            ></image-input>
          </validation-provider>
          <base-button
            class="upload__btn"
            type="submit"
          >
            {{ buttonText }}
          </base-button>
        </form>
      </validation-observer>
    </div>
  </main>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { extend } from 'vee-validate'
import { required, image, size } from 'vee-validate/dist/rules'

import ImageInput from '../components/ImageInput'
import BaseButton from '../components/BaseButton'

extend('required', required)
extend('image', image)
extend('size', size)

export default {
  name: 'Upload',
  components: {
    ImageInput,
    BaseButton,
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      image: '',
      uploadStatus: ''
    }
  },
  computed: {
    buttonText() {
      if (this.uploadStatus === 'uploading') {
        return 'Отправление...'
      } else if (this.uploadStatus === 'error') {
        return 'Ошибка'
      } else if (this.uploadStatus === 'success') {
        return 'Успех'
      } else {
        return 'Отправить'
      }
    }
  },
  methods: {
    async submitForm() {
      if (this.uploadStatus === 'uploading') {
        return
      }
      this.uploadStatus = 'uploading'
      let success = await this.$refs.form.validate()
      if (!success) {
        this.uploadStatus = 'error'
        setTimeout(() =>  this.uploadStatus = '', 2000)
        return
      }
      const formData = new FormData()
      formData.append('image', this.image)

      try {
        const response = await fetch('/upload', {
          method: 'POST',
          body: formData
        })
        const data = await response.json()
        if (data.error == 'err') {
          throw new Error('error when uploading image')
        }
        console.log(data.image_name)
      } catch (e) {
        console.error(e.message)
        this.uploadStatus = 'error'
        setTimeout(() =>  this.uploadStatus = '', 2000)
        return
      }
      this.uploadStatus = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/fonts";
@use "../styles/colors";

.upload {
  display: flex;
  justify-content: center;
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    column-gap: 70px;
    width: 100%;
    max-width: 1280px;
    padding: 0 30px;
  }
  &__title {
    @include fonts.mo-bold();
    margin-top: 30px;
    font-size: 36px;
    line-height: 130%;
  }
  &__rules-title {
    @include fonts.mo-bold();
    margin-top: 25px;
    font-size: 22px;
    line-height: 140%;
    color: colors.$red;
  }
  &__rules {
    list-style-type: decimal;
    list-style-position: inside;
  }
  &__rule {
    @include fonts.mo-reg();
    font-size: 22px;
    line-height: 140%;
  }
  &__btn {
    margin-top: 30px;
  }
}
</style>