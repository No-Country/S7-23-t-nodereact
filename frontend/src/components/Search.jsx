export default function Search () {
    return(
        <form action="" className="relative w-max mx-auto">
                        
            <input type="search" placeholder="Buscar" className=" relative peer z-10 bg-transparent w-12 h-12 rounded-full  outline-none
            pl-12 pr-4
            focus:w-full border-lime-300 cursor-text "            
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="absolute inset-y-0 my-auto w8 h-8 border-r border-transparent peer-focus:border-dark-gray pr-2  ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
           
        </form>
    )
}