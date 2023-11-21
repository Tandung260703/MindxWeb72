import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TableProduct from "~/components/TableProduct";

function ProductAdmin() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Link
          to={"/admin"}
          style={{
            color: "black",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <ArrowBackIcon></ArrowBackIcon>
          Dashboard
        </Link>
        <Button
          variant="contained"
          color="success"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <ControlPointIcon></ControlPointIcon>
          <Link
            to="/admin/product/create"
            style={{ color: "white", textDecoration: "none" }}
          >
            Tạo sản phẩm
          </Link>
        </Button>
      </Box>
      <TableProduct></TableProduct>
    </Box>
  );
}

export default ProductAdmin;
