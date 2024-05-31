import { Bars3Icon } from "@heroicons/react/16/solid";

const Nav = ({ openNav }) => {
  console.log("openNav", openNav);
  return (
    <div className="w-[100%] top-0 h-[12vh] bg-[#000000] shadow-md">
      <div className="flex items-center justify-between w-[90%] mx-auto h-[100%]">
        <h1 className="flex-[1] lg:flex-[.1] cursor-pointer text-[25px] text-white font-bold">
          Menu
          <span className="text-green-600">KI ?</span>
        </h1>
        <div className="flex flex-row space-x-4">
          <div className="nav-link">Home</div>
          <div className="nav-link">Services</div>
          <div onClick={openNav}>
            <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-green-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
