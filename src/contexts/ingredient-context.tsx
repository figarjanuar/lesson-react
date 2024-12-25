import { createContext } from "react";

export type Ingredient = {
  id: string,
  name: string
}

export type IngredientContextType = {
  ingredients: Ingredient[];
  handleAddIngridient: (name: string) => void;
  handleDeleteIngredient: (id: string) => void;
}

const IngredientContext = createContext<IngredientContextType>({
  ingredients: [],
  handleAddIngridient: () => {},
  handleDeleteIngredient: () => {}
})

export default IngredientContext