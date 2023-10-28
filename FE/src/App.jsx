import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Auth from "./pages/Auth";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <DashBoard></DashBoard>
            </AdminLayout>
          }
        />
        <Route path="/login" element={<Auth login />} />
        <Route path="/register" element={<Auth register />} />
      </Routes>
    </>
  );
}

export default App;
