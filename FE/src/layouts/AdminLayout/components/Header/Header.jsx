import {
  faBars,
  faBell,
  faChevronDown,
  faCircleNodes,
  faCircleQuestion,
  faCircleUser,
  faEnvelopeOpen,
  faGear,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-3 flex items-center justify-between bg-gray-100 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center gap-6">
        <button>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
        <Link to="#" className="flex items-center gap-2">
          <img src="http://via.placeholder.com/40x40" alt="" />
          <span className="text-xl font-bold">Logo</span>
        </Link>
        <div className="flex items-center gap-2 bg-gray-200 rounded-lg px-2 py-1 w-[195px]">
          <button>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
          <input
            type="text"
            className="outline-none bg-transparent w-full inline-block"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6">
          <li>
            <Link to="#">
              Invoice &nbsp;
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-sm"
              ></FontAwesomeIcon>
            </Link>
          </li>
          <li>
            <Link to="#">
              Add &nbsp;
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-sm"
              ></FontAwesomeIcon>
            </Link>
          </li>
          <li>
            <Link to="#">
              Account &nbsp;
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-sm"
              ></FontAwesomeIcon>
            </Link>
          </li>
        </ul>
        <span className="block w-[1px] h-[15px] bg-black bg-opacity-5"></span>
        <button className="bg-gray-200 rounded-sm w-[32px] h-[32px]">
          <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
        </button>
        <button className="bg-gray-200 rounded-sm w-[32px] h-[32px]">
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
        </button>
        <button className="bg-gray-200 rounded-sm w-[32px] h-[32px]">
          <FontAwesomeIcon icon={faCircleNodes} />
        </button>
        <button className=" rounded-sm w-[32px] h-[32px]">
          <FontAwesomeIcon icon={faCircleQuestion} />
        </button>
        <button className=" rounded-sm">
          <FontAwesomeIcon
            icon={faCircleUser}
            className=" w-[32px] h-[32px] text-gray-200"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
