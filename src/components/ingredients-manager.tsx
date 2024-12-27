import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContext, useMemo, useState } from "react"
import IngredientContext from "@/contexts/ingredient-context";


export default function IngredientsManager() {
  const [newIngredient, setNewIngredient] = useState<string>('')
  const { ingredients, memoDeleteIngredient, memoAddIngredient } = useContext(IngredientContext)

  const addIngredient = () => {
    memoAddIngredient(newIngredient)
    setNewIngredient('')
  }

  const totalIngredientLength = useMemo(() => {
    return ingredients.reduce((sum, ingredient) => sum + ingredient.name.length, 0)
  }, [ingredients])

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter ingridient"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)} />
        <Button
          onClick={ addIngredient }
          disabled={newIngredient.trim() === ""} >
          Add
        </Button>
      </div>

      {/* list */}
      {ingredients.length > 0 && (
        <>
          <ul className="list-disc pl-6">
            {ingredients.map((ingredient) => (
                <li key={ingredient.id} className="flex justify-between py-2">
                    {ingredient.name}
                    <Button size="sm" variant="destructive" onClick={() => memoDeleteIngredient(ingredient.id)}>
                        Delete
                    </Button>
                </li>
            ))}
          </ul>
          <p>Total chars: {totalIngredientLength}</p>
        </>
      )}
      {ingredients.length === 0 && <p className="text-gray-500">No ingredients added yet.</p>} {/*pesan jika belum ada ingredient*/}
    </div>
  )
}
