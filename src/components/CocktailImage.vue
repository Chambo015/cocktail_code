<script setup lang="ts">
import IconSpinner from '@/components/icons/IconSpinner.vue'
import { ref, watch } from 'vue'

const props = defineProps({
  imgUrl: {
    type: String,
    required: false
  }
})
const isLoadedImg = ref(false)

watch(() => props.imgUrl, () => isLoadedImg.value = false)
</script>

<template>
  <div class="wrapper">
    <IconSpinner v-show="!isLoadedImg" class="wrapper__img-spinner" />
    <img
      v-show="isLoadedImg && imgUrl"
      @load="() => (isLoadedImg = true)"
      @loadstart="() => (isLoadedImg = false)"
      class="wrapper__img"
      :src="imgUrl"
      alt="cocktail image"
      width="400"
      height="400"
    />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
  margin-top: 40px;
  max-width: min(100%, 400px);
  aspect-ratio: 1;
  &__img-spinner {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  &__img {
    max-width: min(100%, 400px);
    object-fit: cover;
    height: auto;
  }
}
</style>
