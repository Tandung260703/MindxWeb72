import Footer from "./Footer/Footer";
import Header from "./Header";

function DefaultLayout({ children }) {
  return (
    <>
      <Header></Header>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </>
  );
}

export default DefaultLayout;
