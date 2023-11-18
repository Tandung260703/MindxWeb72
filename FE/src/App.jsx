import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Auth from "./pages/Auth";
import AdminLayout from "./layouts/AdminLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />

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
