export interface ICocktails {
  drinks?: DrinksEntity[] 
}
export interface DrinksEntity {
  idDrink: string
  strDrink: string
  strDrinkAlternate?: null
  strTags?: string | null
  strCategory: string
  strIBA?: string | null
  strAlcoholic: string
  strGlass: string
  strInstructions: string
  strInstructionsES?: null
  strInstructionsDE?: string | null
  strInstructionsFR?: null
  strInstructionsIT: string
  strDrinkThumb: string
  strIngredient1: string
  strIngredient2: string
  strIngredient3: string
  strIngredient4?: string | null
  strIngredient5?: string | null
  strIngredient6?: string | null
  strIngredient7?: string | null
  strMeasure1: string
  strMeasure2: string
  strMeasure3: string
  strMeasure4?: string | null
  strMeasure5?: string | null
  strMeasure6?: string | null
  strMeasure7?: string | null
  strImageSource?: string | null
  strImageAttribution?: string | null
  strCreativeCommonsConfirmed: string
  dateModified?: string | null
}
