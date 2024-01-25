import type { ICocktails } from '../types'
import axios from 'axios'

export async function getCocktailByTitle(title: string) {
  return await axios.get<ICocktails>(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${title}`,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
