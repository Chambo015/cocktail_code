<script setup lang="ts">
import type { ICocktails } from '@/types'
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'
import { getCocktailByTitle } from '@/services/cocktails.service'
import CocktailImage from '@/components/CocktailImage.vue'

const route = useRoute()
const cocktail = ref<ICocktails>()
const isLoading = ref<Boolean>(false)
const isError = ref<Boolean>(false)

watch(
  () => route.params.title,
  async (newTitle) => {
    try {
      isError.value = false
      isLoading.value = true
      cocktail.value = (await getCocktailByTitle(newTitle as string)).data
    } catch (error) {
      isError.value = true
    } finally {
      isLoading.value = false
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <main class="main" :class="[isLoading && 'main-loading']">
    <h2 class="main__title">
      {{ cocktail?.drinks?.[0].strDrink }}
    </h2>

    <ul class="main__list">
      <li class="main__list__item">
        <span class="item__title">Category:</span>
        <p>{{ cocktail?.drinks?.[0].strCategory }}</p>
      </li>
      <li class="main__list__item">
        <span class="item__title">Instructions:</span>
        <p>{{ cocktail?.drinks?.[0].strInstructions }}</p>
      </li>
    </ul>
    <CocktailImage :img-url="cocktail?.drinks?.[0].strDrinkThumb" />
  </main>
</template>

<style scoped lang="scss">
.main {
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 1s ease;

  &.main-loading {
    filter: blur(7px);
  }

  &__title {
    font-weight: 600;
    font-size: 32px;
  }

  &__list {
    list-style-type: none;
    padding: 0;
    margin-top: 20px;

    &__item {
      padding: 0.75rem 0.5rem;

      & .item__title {
        font-size: 20px;
        font-weight: 500;
        color: rgba(224, 218, 218, 0.785);
      }
    }
  }
}
</style>
