import { Link } from "react-router-dom";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHome,
  faInbox,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";

function AdminLayout({ children }) {
  return (
    <div className="">
      <Header></Header>
      <Sidebar></Sidebar>
      <div className="fixed left-[240px] top-[64px] p-6">{children}</div>
    </div>
  );
}

export default AdminLayout;
