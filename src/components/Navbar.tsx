import Link from "next/link";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 sm:py-4 bg-gray-100 shadow-md">
      {/* Left Section: Navigation Links */}
      <ul className="space-x-8 text-sm font-dmsans font-semibold text-gray-800 hidden sm:flex">
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
      <div className="text-2xl sm:text-5xl font-moondance text-gray-800 p-1">
        A&J Jewelry
      </div>

      {/* Right Section: Icons */}
      <div className="items-center space-x-6 text-gray-800 hidden sm:flex">
        {/* Search Button */}
        <button className="flex items-center space-x-1 border px-3 py-1 rounded-md hover:bg-gray-200 bg-white">
          <FaSearch size={24}/>
          <span className="text-sm px-4 py-2 text-lg">Search</span>
        </button>

        {/* Cart Icon */}
        <Link href="/cart" className="hover:text-gray-600">
          <FaShoppingCart size={24} />
        </Link>

        {/* Wishlist Icon */}
        <Link href="/wishlist" className="hover:text-gray-600">
          <FaHeart size={24} />
        </Link>

        {/* User Account Icon */}
        <Link href="/account" className="hover:text-gray-600">
          <FaUser size={24} />
        </Link>
      </div>
      <Link href="/account" className="hover:text-gray-600 sm:hidden">
          <FaShoppingCart size={20} />
      </Link>
      
    </nav>
  );
};

export default Navbar;
