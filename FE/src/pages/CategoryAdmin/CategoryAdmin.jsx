import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categoryApi } from "~/api/categoryApi";

function CategoryAdmin() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    categoryApi.getAll().then((res) => setCategories(res.data));
  }, []);

  const handleDeleteProduct = (id) => {
    categoryApi.delete(id).then((res) => {
      setCategories((prev) => prev.filter((item) => item._id != id));
    });
  };

  const handleEditProduct = (id) => {
    navigate(`/admin/category/edit/${id}`);
  };

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
            to="/admin/category/create"
            style={{ color: "white", textDecoration: "none" }}
          >
            Tạo danh mục
          </Link>
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Tên danh mục</TableCell>
              <TableCell colSpan={2} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((product) => (
              <TableRow
                key={product._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product._id}
                </TableCell>
                <TableCell align="left">{product.name}</TableCell>
                <TableCell align="center">
                  <Button
                    color="info"
                    variant="outlined"
                    onClick={() => handleEditProduct(product._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => handleDeleteProduct(product._id)}
                    sx={{ ml: 1 }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CategoryAdmin;
