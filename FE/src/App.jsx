import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Auth from "./pages/Auth";
import AdminLayout from "./layouts/AdminLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home/Home";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import ProductAdmin from "./pages/ProductAdmin";
import CreateProductAdmin from "./pages/CreateProductAdmin";
import EditProductAdmin from "./pages/EditProductAdmin";
import CategoryAdmin from "./pages/CategoryAdmin";
import BrandAdmin from "./pages/BrandAdmin";

function App() {
  return (
    <>
      <Routes>
        {/* Public Route */}
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/Search"
          element={
            <DefaultLayout>
              <Search />
            </DefaultLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <DefaultLayout>
              <Cart />
            </DefaultLayout>
          }
        />
        <Route path="/login" element={<Auth login />} />
        <Route path="/register" element={<Auth register />} />

        {/* Private Route */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <DashBoard></DashBoard>
            </AdminLayout>
          }
        />

        <Route
          path="/admin/product"
          element={
            <AdminLayout>
              <ProductAdmin></ProductAdmin>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/product/create"
          element={
            <AdminLayout>
              <CreateProductAdmin></CreateProductAdmin>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/product/edit/:id"
          element={
            <AdminLayout>
              <EditProductAdmin></EditProductAdmin>
            </AdminLayout>
          }
        />

        <Route
          path="/admin/category"
          element={
            <AdminLayout>
              <CategoryAdmin></CategoryAdmin>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/category/create"
          element={
            <AdminLayout>
              <EditProductAdmin></EditProductAdmin>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/category/edit/:id"
          element={
            <AdminLayout>
              <EditProductAdmin></EditProductAdmin>
            </AdminLayout>
          }
        />

        <Route
          path="/admin/brand"
          element={
            <AdminLayout>
              <BrandAdmin></BrandAdmin>
            </AdminLayout>
          }
        />

        {/* Access Route */}

        <Route
          path="*"
          element={
            <DefaultLayout>
              <div>404</div>
            </DefaultLayout>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
