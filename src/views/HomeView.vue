<script setup lang="ts">
import type { ICocktails } from '@/types'
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';
import {getCocktailByTitle} from '@/services/cocktails.service'

const route = useRoute()
const cocktail = ref<ICocktails>()

watch(
  () => route.params.title,
  async newTitle => {
    cocktail.value = await getCocktailByTitle(newTitle as string)
  }, {
  immediate: true}
)
</script>

<template>
  <main>
    <h2>
      {{ cocktail?.drinks?.[0].strDrink }}
    </h2>
  </main>
</template>
