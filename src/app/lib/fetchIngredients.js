export default async function fetchIngredients() {
  try {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    
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