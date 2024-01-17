export default async function fetchMealById(id) {
  try {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    
    if (!res.ok) {
      throw new Error(`An Error has Occured ${res.status}`)
    }

    const jsonData = await res.json();
    return jsonData.meals[0];
  }
  catch (e) {
    console.error(e);
  }
}