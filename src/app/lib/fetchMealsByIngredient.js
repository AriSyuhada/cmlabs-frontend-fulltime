export default async function fetchMealsByIngredient(ingredientName) {
  try {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredientName);
    
    if (!res.ok) {
      throw new Error(`An Error has Occured ${res.status}`)
    }

    const jsonData = await res.json();
    return jsonData.meals;
  }
  catch (e) {
    console.error(e);
  }
}