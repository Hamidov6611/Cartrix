import { NavLink } from "react-router-dom";
import { UseScrolled } from "../hooks/use-scrolled";
import { Vector } from ".";

const Header = () => {
  const scrolled = UseScrolled();

  return (
    <div
      className={`h-[80px] md:h-[169px] bg-mainColor flex items-center sticky z-30 top-0 left-0 ${
        scrolled && "border-b border-b-mediumDark shadow-sm"
      }`}
    >
      {!scrolled && <Vector />}
      <div className="w-[80%] mx-auto flex justify-between items-center">
        <div className="w-[30%] flex items-center">
          <p className="md:font-bold z-20 font-semibold font-raleway text-primary md:text-[24px] text-[18px]">
            Freelancer
          </p>
        </div>
        <nav className="w-[45%] md:flex justify-end hidden gap-x-[50px] font-medium font-raleway text-base">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-mediumDark"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-mediumDark"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/services"}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-mediumDark"
            }
          >
            Services
          </NavLink>
          <NavLink
            to={"/reviews"}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-mediumDark"
            }
          >
            Reviews
          </NavLink>
          <NavLink
            to={"/article"}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-mediumDark"
            }
          >
            Article
          </NavLink>
        </nav>
        <div className="w-[40%] md:w-[10%] flex items-center justify-end">
          <button className="h-[40px] md:h-[53px] w-[100px] md:w-[126px] font-dmsans text-base text-white py-4 flex items-center justify-center border border-primary rounded-[87px]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
