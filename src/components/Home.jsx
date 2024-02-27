
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import {Link} from "react-router-dom"
const Home = () => {
    
  return (
    <div className="home__container w-full h-screen flex items-center justify-center">
        <div className=" w-96 border-2 bg-slate-200 flex items-center justify-around gap-3 px-3 py-10 rounded-xl ">
        <BsFillGridFill />
        <Link to={"/form"}>  <FaPlus  /> </Link>
        <Link to={"/users"}>  <FaSearch /> </Link>
        <FaClockRotateLeft />
        </div>
    </div>
  )
}

export default Home