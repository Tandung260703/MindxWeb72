import Box from "@mui/material/Box";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminLayout({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("CURRENT_USER")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="">
      <Header></Header>
      <Box>
        <Sidebar>
          <Box sx={{ margin: 5 }}>{children}</Box>
        </Sidebar>
      </Box>
    </div>
  );
}

export default AdminLayout;
