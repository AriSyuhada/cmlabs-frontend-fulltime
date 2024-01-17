import Link from "next/link";

export default function Navbar () {
    return (
        <navbar className='flex justify-between px-12 py-3 bg-white shadow-md w-full z-20'>
            <Link className='font-black text-lg tracking-widest uppercase' href="/"><span className="text-red-600">Meal</span>App</Link>
            <div className='flex flex-row space-x-7 font-semibold'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 block sm:hidden text-red-600">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
                <p className='hidden sm:block'>Home</p>
                <p className='hidden sm:block'>Feeds</p>
                <p className='hidden sm:block'>Ingredients</p>
                <p className='hidden sm:block'>Local Culinary</p>
            </div>
        </navbar>
    );
}
