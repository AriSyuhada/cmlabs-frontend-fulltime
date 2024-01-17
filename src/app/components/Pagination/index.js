export default function Pagination ({ currentPage, itemsPerPage, totalItems, paginate, next, prev }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(totalItems/itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const startPage = Math.max(currentPage - 2, 0);
  const endPage = Math.min(currentPage + 2, pageNumbers.length);

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <button onClick={() => prev()} title="prev" className="flex flex-col justify-center items-center bg-red-600 p-3 sm:p-4 rounded-full hover:bg-opacity-85">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
        </svg>
      </button>
      {
        startPage > 0 
        ? <p className="text-lg sm:text-xl font-extrabold tracking-widest">...</p>
        : <></>
      }
      {
        pageNumbers
          .filter((_, i) => i >= startPage && i <= endPage)
          .map((pageNum) => (
            <button key={`page-${pageNum}`} onClick={() => paginate(pageNum)} title={pageNum + 1} className={`flex flex-col justify-center items-center ${currentPage === pageNum ? 'bg-red-600 text-white border-2 border-red-600 hover:bg-opacity-85' : 'bg-white border-2 border-black border-solid hover:bg-red-500 hover:border-red-500 hover:text-white'} px-4 py-2 sm:px-5 sm:py-[0.625rem] rounded-full font-bold text-lg`}>{pageNum + 1}</button>
          ))
      }
      {
        endPage < pageNumbers.length
        ? <p className="text-lg sm:text-xl font-extrabold tracking-widest">...</p>
        : <></>
      }
      <button onClick={() => next()} title="next" className="flex flex-col justify-center items-center bg-red-600 p-3 sm:p-4 rounded-full hover:bg-opacity-85">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}