import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex gap-[30px] items-center">
      <Link to="#">Laptops</Link>
      <Link to="#">Desktop PCs</Link>
      <Link to="#">Networking Devices</Link>
      <Link to="#">Printers & Scanners</Link>
      <Link to="#">PC Parts</Link>
      <Link to="#">All Other Products</Link>
      <Link to="#">Repairs</Link>
    </div>
  );
}

export default Nav;
