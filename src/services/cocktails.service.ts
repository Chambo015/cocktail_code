import type { ICocktails } from '../types'
import axios from 'axios'

export function getCocktailByTitle(title: string) {
  let data
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    .then((res) => {
      data = res.data
    })

  return data 
}
