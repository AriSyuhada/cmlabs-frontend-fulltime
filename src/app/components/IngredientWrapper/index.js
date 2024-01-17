import Link from "next/link";

export default function IngredientWrapper ({ name }) {

    return (
        <>
          <div className="flex flex-col justify-center items-center gap-8 py-6 px-6 rounded-2xl font-semibold bg-white shadow-md hover:bg-red-600 hover:shadow-2xl hover:text-white group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-44 h-44 text-red-600 group-hover:text-white">
              <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
            </svg>
            <p className="text-lg sm:text-xl">{name}</p>
            <Link className=" max-sm:text-sm bg-transparent hover:bg-white hover:bg-opacity-20 hover: py-3 px-6 rounded-full border-4 border-solid border-black group-hover:border-white font-bold uppercase" href={`/ingredient/${name}`}>Show</Link>
          </div>
        </>
    );
}