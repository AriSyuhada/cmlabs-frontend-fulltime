import Image from "next/image";
import Link from "next/link";

export default function MealWrapper({ ingredientSlug, mealId, thumbnail, name }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 py-6 px-6 rounded-2xl font-semibold bg-white shadow-md hover:bg-red-600 hover:shadow-2xl hover:text-white group max-w-[248px]">
        <Image 
          priority
          className="rounded-full overflow-hidden"
          height={200}
          width={200}
          src={thumbnail}
          alt={name}
        />
        <p className="text-lg sm:text-xl whitespace-normal break-words text-center">{name.substring(0, 15)}{name.length > 17 ? '...' : ''}</p>
        <Link className=" max-sm:text-sm bg-transparent hover:bg-white hover:bg-opacity-20 hover: py-3 px-6 rounded-full border-4 border-solid border-black group-hover:border-white font-bold uppercase" href={`/ingredient/${ingredientSlug}/meal/${mealId}`}>Recipe</Link>
      </div>
    </>
  );
}
