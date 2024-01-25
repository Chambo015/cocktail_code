import { expect, describe, test } from 'vitest'
import { getCocktailByTitle } from './services/cocktails.service'

describe('fetch first Cocktail ', () => {
  test('should be Margarita', async () => {
    const data = await getCocktailByTitle('margarita')
    expect(data.data.drinks?.[0].strDrink).toBe('Margarita')
  })
})
