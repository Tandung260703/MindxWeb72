import Footer from "./Footer/Footer";
import Header from "./Header";
import Box from "@mui/material/Box";

function DefaultLayout({ children }) {
  return (
    <>
      <Header></Header>
      <Box>{children}</Box>
    </>
  );
}

export default DefaultLayout;
