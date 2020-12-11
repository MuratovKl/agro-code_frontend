<template>
  <label
    @dragenter.stop.prevent="isDragInside = true"
    @dragover.stop.prevent="isDragInside = true"
    @dragleave.stop.prevent="isDragInside = false"
    @drop.stop.prevent="handleDrag"
    class="image-input"
    :class="{ 
      'image-input_error': error, 
      'image-input_loaded': isFileLoaded,
      'image-input_dragover': isDragInside,
    }"
  >
    <div class="image-input__info">
      <img class="image-input__upload-icon" src="../assets/upload_icon.svg">
      <p :style="{ 'opacity': isDragInside ? 0 : 1 }" class="image-input__text">
        Перетащите файл<br>
        или <span class="image-input__text_underline">нажмите сюда</span>
      </p>
    </div>


    <img class="image-input__preview" v-show="preview" :src="preview">
    <input class="image-input__input" type="file" accept="image/*" @change="handleUpload">
  </label>
</template>

<script>
export default {
  name: 'ImageInput',
  props: {
    error: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      isFileLoaded: false,
      preview: '',
      isDragInside: false
    }
  },
  mounted() {
    window.addEventListener('dragover', (e) => e.preventDefault())
    window.addEventListener('drop', (e) => e.preventDefault())
  },
  methods: {
    handleFileLoad(file) {
      this.$emit('input', file)
      let reader = new FileReader()
      reader.onload = () => this.preview = reader.result
      reader.readAsDataURL(file)
      this.isFileLoaded = true
    },
    handleUpload(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0]
        this.handleFileLoad(file)
      }
    },
    handleDrag(e) {
      const file = e.dataTransfer.files[0]
      if (file) {
        this.handleFileLoad(file)
      }
      this.isDragInside = false
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/fonts";
@use "../styles/colors";

.image-input {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 150px;
  border: 3px dashed colors.$grayb;
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  &_error {
    border: 3px dashed colors.$lightRed;
  }
  &_loaded {
    border: 3px solid transparent;;
  }
  &_dragover {
    border: 3px solid colors.$green;
  }
  &__input {
    display: none;
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__upload-icon {
    width: 115px;
    margin-bottom: 35px;
  }
  &__text {
    @include fonts.mo-reg();
    font-size: 22px;
    line-height: 130%;
    color: colors.$text;
    &_underline {
      color: colors.$link;
      text-decoration: underline;
    }
  }
  &__preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

}
</style>