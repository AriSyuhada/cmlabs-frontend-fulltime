import fetchMealById from "@/app/lib/fetchMealById";
import Image from "next/image";
import Link from "next/link";

export default async function Meal({ params }) {
    const meal = await fetchMealById(params.id);
    const youtubeURL = meal.strYoutube !== '' ? meal.strYoutube.replace('watch?v=', 'embed/') : '';

    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal['strIngredient' + i] === '' || meal['strIngredient' + i] === null) continue;
        ingredients.push(
            <li key={'ingredient ' + i} className='list-disc'>
                <p className='capitalize'>{meal['strMeasure' + i]} {meal['strIngredient' + i]}</p>
            </li>
        );
    }

    return (
      <div className="meal min-h-screen">
        <div className='w-[77%] mx-auto'>

          <h2 className='font-bold text-3xl sm:text-4xl mt-12 mb-4 text-red-600'>{meal.strMeal}</h2>
          <div className="flex flex-row items-center gap-2">
            <Link href="/" className="font-semibold max-sm:text-xs flex flex-row gap-1" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 sm:w-5 h-4 sm:h-5 text-red-600">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              <p>Home</p>
            </Link>
            <p className="font-semibold max-sm:text-xs">/</p>
            <Link href={`/ingredient/${params.slug}`}>
              <p className="font-semibold max-sm:text-xs">{decodeURI(params.slug)} Meals</p>
            </Link>
            <p className="font-semibold max-sm:text-xs">/</p>
            <p className="font-bold max-sm:text-xs">{meal.strMeal}</p>
          </div>

          <div className="bg-white px-4 sm:px-8 py-12 rounded-xl shadow-xl mt-8 mb-8">
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-2'>
              <div>
                <Image 
                  priority
                  className='rounded-2xl w-full' 
                  height={500}
                  width={500}
                  src={meal.strMealThumb} 
                  alt={meal.strMeal} 
                />
                <h3 className='font-semibold text-lg sm:text-xl mt-2 text-red-500'>{meal.strArea} Culinary</h3>
              </div>
              <div className=''>
                <h4 className='text-3xl sm:text-4xl mb-5'>Instructions</h4>
                <p className='text-justify mb-5 indent-8'>{meal.strInstructions}</p>
                <h4 className='text-3xl sm:text-4xl mb-5'>Recipes</h4>
                <ul className='flex flex-col max-sm:pl-8 pl-6 sm:flex-row flex-wrap gap-4 sm:gap-8'>
                  {ingredients}
                </ul>
              </div>
            </div>
          </div>
          {
            youtubeURL != '' &&
            <div className="bg-white px-4 sm:px-8 py-12 rounded-xl shadow-xl mb-16">
              <h4 className='text-3xl sm:text-4xl mb-5 text-center'>Tutorials</h4>
              <div className='relative w-full overflow-hidden pt-[56.25%] mx-auto'>
                <iframe className='absolute top-0 left-0 bottom-0 right-0 w-full h-full border-none' title={meal.strMeal} src={youtubeURL}></iframe>
              </div>
            </div>
          }
        </div>
      </div>
    );
}
