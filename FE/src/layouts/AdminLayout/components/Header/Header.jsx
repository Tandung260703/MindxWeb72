import {
  faBars,
  faBell,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/users">Users</Link>
      </div>
      <div className="flex items-center gap-4">
        <button>
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </button>
        <button>
          <img
            className="rounded-[50%]"
            width={40}
            height={40}
            src="https://coreui.io/demos/react/4.5/free/static/media/8.35ee8919ea545620a475.jpg"
            alt="avt"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
