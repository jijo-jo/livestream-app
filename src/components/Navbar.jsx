import { FaArrowLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Navbar = ()=>{

     return(
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center mb-8 md:mb-16 bg-black text-white p-4 z-10">
        <div className="flex flex-row">
        <FaArrowLeft className="text-2xl mt-1 font-bold"/>
        <h1 className="text-2xl ml-4 md:ml-8">Romantic Comedy</h1>
        </div>
        <FaSearch className="text-2xl font-bold"/>
        </div>
    </>
     )


}


export default Navbar