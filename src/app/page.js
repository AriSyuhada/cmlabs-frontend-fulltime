import Image from "next/image";
import IngredientWrapper from "./components/IngredientWrapper";
import fetchIngredients from "./lib/fetchIngredients";
import IngredientList from "./components/IngredientList";

export default async function Home() {
  const ingredients = await fetchIngredients();

  return (
    <main className="text-center min-h-screen">
      <div className='flex flex-row bg-white py-16 shadow-lg'>
        <div className="flex flex-col gap-6 lg:basis-3/5 text-start px-16">
          <h1 className="text-3xl sm:text-4xl font-bold">Savor Every Bite, Explore Endless Delights<br /><span className="text-2xl sm:text-3xl text-red-600">Your Culinary Journey Begins Here!</span></h1>
          <p className="sm:text-lg">Welcome to our culinary haven, where taste meets innovation! Our food menu website is a gastronomic delight, offering a diverse range of flavors to tantalize your taste buds. From delectable appetizers to mouthwatering mains and tempting desserts, we curate a symphony of tastes to satisfy every craving.</p>
        </div>
        <div className="hidden lg:flex flex-col justify-center items-center px-4 lg:basis-2/5">
          <Image 
            priority
            width={375}
            height={375}
            src="/assets/cooking_illustration.svg"
            alt="cooking-illustraton"
          />
        </div>
      </div>
      <div className='py-16 px-8 flex flex-col items-center'>
        <h2 className="text-2xl sm:text-3xl font-bold mt-16 mb-4 text-red-600">Pick Any Ingredient that You Want</h2>
        <h3 className="text-xl sm:text-2xl font-semibold mb-16 max-w-[90%] sm:max-w-[60%]">Indulge in Culinary Bliss: Explore Our Exquisite Special Recipes, Expertly Grouped by Ingredient for Your Ultimate Gastronomic Adventure!</h3>
        <IngredientList ingredients={ingredients} />
      </div>
    </main>
  )
}
