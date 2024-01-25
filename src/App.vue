<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useCocktailStore } from './stores/cocktails.store'

const store = useCocktailStore()
</script>

<template>
  <header class="header">
    <aside class="header__wrapper">
      <h1 class="header__title">Cocktails Code!</h1>
      <nav class="header__nav">
        <RouterLink
          v-for="title in store.cocktailsTitle"
          :key="title"
          class="header__nav__link"
          :to="`/${title}`"
          >{{ title }}</RouterLink
        >
      </nav>
    </aside>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
.header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  place-items: center;
  padding-right: 50px;
  border-right: 1px solid rgba(60, 60, 60, 0.50);

  &__title {
    font-weight: 700;
    font-size: 32px;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 18px;
    margin-top: 2rem;

    &__link {
      display: inline-block;
      padding: 0.25rem 1rem;
      &:hover {
        background-color: hsla(160, 100%, 37%, 0.05);
      }
    }
    &__link.router-link-exact-active {
      color: white;
      background-color: hsla(160, 100%, 37%, 0.2);
    }
  }
}


@media (min-width: 1024px) {




}
</style>
