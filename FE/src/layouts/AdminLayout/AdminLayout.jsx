import Header from "./components/Header";

function AdminLayout({ children }) {
  return (
    <div className="container my-0 mx-auto">
      <Header></Header>
      {children}
    </div>
  );
}

export default AdminLayout;
