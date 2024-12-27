import IngredientContext, { Ingredient, IngredientContextType } from "@/contexts/ingredient-context"
import { ReactNode, useCallback, useEffect, useState } from "react"

type IngredientProviderType = {
  children: ReactNode
}

export default function IngredientProvider({ children }: IngredientProviderType) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const storedIngredients = localStorage.getItem('ingredients');
    if (storedIngredients) {
        try {
            const parsedIngredients = JSON.parse(storedIngredients) as Ingredient[];
            setIngredients(parsedIngredients);
        } catch (error) {
            console.error("Error parsing ingredients from local storage:", error);
            setIngredients([])
        }
    }
    setIsLoaded(true)
  }, []);

  useEffect(() => {
      if (isLoaded) {
          localStorage.setItem('ingredients', JSON.stringify(ingredients));
      }
  }, [ingredients, isLoaded])

  const handleAddIngridient = (name: string) => {
    const trimmedNewIngredient = name.trim();
    if (trimmedNewIngredient === '') return;

    if (ingredients.some(ingredient => ingredient.name.toLowerCase() === trimmedNewIngredient.toLowerCase())) {
        alert("Already in the list");
        return;
    }

    setIngredients([
      ...ingredients,
      { id: crypto.randomUUID(), name }
    ])
  }

  const handleDeleteIngredient = (id: string) => {
    setIngredients(ingredients.filter((data) => data.id !== id))
  }

  const memoAddIngredient = useCallback((name: string) => {
    handleAddIngridient(name)
  }, [handleAddIngridient])

  const memoDeleteIngredient = useCallback((id: string) => {
    handleDeleteIngredient(id)
  }, [handleDeleteIngredient])

  const contextValue: IngredientContextType = {
    ingredients, 
    handleAddIngridient,
    handleDeleteIngredient,
    memoAddIngredient,
    memoDeleteIngredient
  }

  return (
    <IngredientContext.Provider value={contextValue}>
      {children}
    </IngredientContext.Provider>
  )
}
