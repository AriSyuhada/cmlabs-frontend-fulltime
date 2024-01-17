'use client';

import { useEffect, useState } from "react";
import MealWrapper from "../MealWrapper";

export default function MealList({meals, slug}) {
  const [query, setQuery] = useState('');
  const [debouncedInput, setDebouncedInput] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const handleInputTextChange = (e) => {
    setQuery(e.target.value);
  };

  const handlePrevPage = () => {
    if (!currentPage - 1 < 0) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    }
  }

  const handleNextPage = (number) => {
    if (currentPage !== Math.ceil(filteredIngredient.length / itemsPerPage) - 1) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    }
  }

  const handlePaginate = (number) => {
    setCurrentPage(number);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInput(query);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query, 500]);

  useEffect(() => {
    setFilteredMeals(
      meals.filter((meal) => meal.strMeal.toLowerCase().includes(debouncedInput.toLowerCase()))
    );
    setCurrentPage(0);
  }, [debouncedInput]);

  return(
    <>
      <div className="flex flex-row gap-2 items-center mb-8 px-6 py-3 bg-white border-4 border-black rounded-full hover:border-red-600 hover:border-4 focus:border-red-600 focus:border-4 group min-w-[70%]">
        <input className="group-focus:outline-none focus:outline-none flex-1 text-lg font-semibold" type="text" value={query} placeholder="Meal..." onChange={(e) => handleInputTextChange(e)} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-opacity-50 group-focus:text-red-600 stroke-2">
          <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
        </svg>
      </div>
      <div className='flex flex-wrap gap-8 justify-center mb-16'>
        {
          filteredMeals.length > 0
          ? filteredMeals
              .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((meal) =>
                <div key={meal.idMeal} className=''>
                  <MealWrapper
                    ingredientSlug={slug}
                    mealId={meal.idMeal}
                    name={meal.strMeal}
                    thumbnail={meal.strMealThumb}
                  />
                </div>
              )
          : <p className="text-lg">Sorry, we can't provide your Meal</p>
        }
      </div>
      {
        filteredMeals.length > itemsPerPage
        ? <div className="mt-6">
            <Pagination 
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={filteredIngredient.length}
              paginate={handlePaginate}
              next={handleNextPage}
              prev={handlePrevPage}
            />
          </div>
        : <></>
      }
    </>
  );
}