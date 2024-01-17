'use client';
import IngredientWrapper from "../IngredientWrapper";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";

export default function IngredientList({ingredients}) {
  const [query, setQuery] = useState('');
  const [debouncedInput, setDebouncedInput] = useState('');
  const [filteredIngredient, setFilteredIngredient] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const handleInputTextChange = (e) => {
    setQuery(e.target.value);
  };

  const handlePrevPage = () => {
    if (!currentPage - 1 < 0) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    }
  };

  const handleNextPage = (number) => {
    if (currentPage !== Math.ceil(filteredIngredient.length / itemsPerPage) - 1) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    }
  };

  const handlePaginate = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInput(query);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query, 500]);

  useEffect(() => {
    setFilteredIngredient(
      ingredients.filter((ingredient) => ingredient.strIngredient.toLowerCase().includes(debouncedInput.toLowerCase()))
    );
    setCurrentPage(0);
  }, [debouncedInput]);

  return (
    <>
      <div className="flex flex-row gap-2 justify-between items-center mb-8 px-6 py-3 bg-white border-4 border-black rounded-full hover:border-red-600 hover:border-4 focus:border-red-600 focus:border-4 group min-w-[70%]">
        <input className="group-focus:outline-none focus:outline-none flex-1 text-lg font-semibold" type="text" value={query} placeholder="Ingredient..." onChange={(e) => handleInputTextChange(e)} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-opacity-60 group-focus:text-red-600 stroke-2">
          <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
        </svg>
      </div>
      <div className='flex flex-wrap gap-8 justify-center items-center min-h-[50vh]'>
        {
          filteredIngredient.length > 0
          ? filteredIngredient
              .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((ingredient) => 
                <div key={ingredient.idIngredient} className='flex-[1_0_40%] md:flex-[1_0_25%] xl:flex-[1_0_21%]'>
                  <IngredientWrapper 
                    name={ingredient.strIngredient} 
                  />
                </div>
              )
          : <p className="text-lg">Sorry, we can't provide your Ingredient</p>
        }
      </div>
      {
        filteredIngredient.length > itemsPerPage
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