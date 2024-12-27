import { recipeService } from "@/api";
import { Recipe } from "@/api/types";
import { Alert } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { useEffect, useState } from "react";

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await recipeService.getAllRecipes();
        setRecipes(data);
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
            // Akses informasi error dari response Axios
            setError(error.response?.data?.message || error.message || "Terjadi kesalahan saat memuat data.");
        } else {
            setError("Terjadi kesalahan yang tidak terduga.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
        <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
        </div>
    );
  }

  if (error) {
    return (
        <Alert variant="destructive">
            {error}
        </Alert>
    );
  }

  if (!recipes) {
    return <p>Tidak ada resep yang ditemukan.</p>
  }

    return (
        <div className="space-y-4 my-5">
            {recipes.map((recipe) => (
                <Card key={recipe.id}>
                    <CardHeader>
                        {recipe.name}
                    </CardHeader>
                    <CardContent>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default RecipeList;