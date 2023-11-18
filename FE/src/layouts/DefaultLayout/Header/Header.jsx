import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header() {
  return (
    <div className="border-b border-stone-700">
      <div className="flex gap-[30px] items-center justify-between container mx-auto p-4">
        <div className="flex gap-[30px] items-center">
          {/* Logo */}
          <div>
            <Link to="#">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          {/* Nav */}
          <Nav></Nav>
        </div>
        <div className="flex gap-[30px]">
          <button>
            <i class="fa-solid fa-magnifying-glass cursor-pointer"></i>
          </button>
          <button>
            <i class="fa-solid fa-cart-shopping"></i>
          </button>

          <button>
            <img
              class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="/images/avt.png"
              alt="Bordered avatar"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
