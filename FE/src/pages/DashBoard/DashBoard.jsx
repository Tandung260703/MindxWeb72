import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("CURRENT_USER")) {
      navigate("/login");
    } else {
      navigate("/admin");
    }
  }, []);
  return (
    <>
      <h1>DashBoard Page</h1>
    </>
  );
}

export default DashBoard;
