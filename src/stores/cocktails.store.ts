import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCocktailStore = defineStore('cocktails', () => {
  const cocktailsTitle = ref<string[]>(['margarita', 'mojito', 'a1', 'kir'])


  return { cocktailsTitle }
})
