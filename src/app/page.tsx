import { RecipeDisplay, RecipeSearch } from "@/app/ui";

const loadedRecipe = undefined;

export default async function Home() {
  return (
    <main className="app-main">
      {loadedRecipe ? <RecipeDisplay recipe={loadedRecipe} /> : <RecipeSearch results={loadedRecipe} />}
    </main>
  );
}
