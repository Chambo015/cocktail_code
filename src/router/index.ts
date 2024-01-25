import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import { useCocktailStore } from '@/stores/cocktails.store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: to => {
        const store =  useCocktailStore()
        return { name: 'cocktails' , params: {title: store.cocktailsTitle[0]} }
      },
    },
    {
      path: '/:title',
      name: 'cocktails',
      component: HomeView,
      beforeEnter(to, from) {
        const store =  useCocktailStore()
        const exists = store.cocktailsTitle.includes(to.params.title as string);
        if (!exists)
          return {
            name: 'noteFound',
            params: { pathMatch: to.params.title },
            hash: to.hash,
            query: to.query
          };
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'noteFound',
      component: NotFound,
    },
  ]
})

export default router
