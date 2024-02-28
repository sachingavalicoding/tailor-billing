import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full flex items-center flex-col fixed top-0 left-0 bg-black text-slate-50 z-10">
      <div className="container   flex items-center justify-between px-6 py-4">
        <h2 className="font-bold text-[0.9rem] ">
          {" "}
          <span className="text-xl mx-2">JAY</span> Tailors{" "}
        </h2>
        <div className="flex items-center gap-3">
          <Link to={"/users"}>
            {" "}
            <FaSearch />{" "}
          </Link>
          <Link to={"/users"}>
            {" "}
            <BsThreeDotsVertical />{" "}
          </Link>
        </div>
      </div>
      <div className=" w-96  bg-black flex items-center justify-around gap-3 px-1 py-2 rounded-xl ">
        <Link to={"/"}> Home </Link>
        <Link to={"/users"}> Customers </Link>
        <Link to={"/form"}> Add New </Link>
      </div>
    </div>
  );
};

export default Navbar;
