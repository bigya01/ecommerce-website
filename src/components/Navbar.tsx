import Link from "next/link";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 sm:py-2 shadow-md bg-[#1C1C10] ">
      {/* Left Section: Navigation Links */}
      <ul className="space-x-8 text-sm font-dmsans  hidden sm:flex text-[#8C7C5C] ">
        <li>
          <Link href="/rings" className="hover:text-gray-600 text-xl">
            RINGS
          </Link>
        </li>
        <li>
          <Link href="/bracelets" className="hover:text-gray-600 text-xl">
            BRACELETS
          </Link>
        </li>
        <li>
          <Link href="/necklaces" className="hover:text-gray-600 text-xl">
            NECKLACES
          </Link>
        </li>
      </ul>

      {/* Center Section: Logo */}
      <div className="text-2xl sm:text-4xl font-moondance font-semibold  p-1  text-[#8C7C5C]">
        A&J Jewelry
      </div>


      <div className="items-center space-x-6 hidden sm:flex">
        <button className="flex items-center space-x-1 border border-[#8C7C5C] px-3 py-1 rounded-md hover:bg-gray-200  text-[#8C7C5C] ">
          <FaSearch size={18} />
          <span className="text-sm px-4 py-2 text-lg ">Search</span>
        </button>

        {/* Cart Icon */}
        <Link href="/cart" className="hover:text-gray-600 text-[#8C7C5C]  ">
          <FaShoppingCart size={18}  />
        </Link>

        {/* Wishlist Icon */}
        <Link href="/wishlist" className="hover:text-gray-600 text-[#8C7C5C]  ">
          <FaHeart size={18}  />
        </Link>

        {/* User Account Icon */}
        <Link href="/account" className="hover:text-gray-600 text-[#8C7C5C] ">
          <FaUser size={18}  />
        </Link>
      </div>
      <Link href="/account" className="hover:text-gray-600 sm:hidden text-[#8C7C5C]  ">
          <FaShoppingCart size={18} />
      </Link>
      
    </nav>
  );
};

export default Navbar;
