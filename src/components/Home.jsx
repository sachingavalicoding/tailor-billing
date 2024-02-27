
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import {Link} from "react-router-dom"
import UserList from "./UserList";
const Home = () => {
    
  return (
    <div className="home__container  w-full ">
       <UserList />
    </div>
  )
}

export default Home