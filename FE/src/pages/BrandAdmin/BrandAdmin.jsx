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
import { brandApi } from "~/api/brandApi";

function BrandAdmin() {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    brandApi.getAll().then((res) => setBrands(res.data));
  }, []);

  const handleDeleteBrand = (id) => {
    brandApi.delete(id).then((res) => {
      setBrands((prev) => prev.filter((item) => item._id != id));
    });
  };

  const handleEditBrand = (id) => {
    navigate(`/admin/brand/edit/${id}`);
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
            to="/admin/brand/create"
            style={{ color: "white", textDecoration: "none" }}
          >
            Tạo nhãn hàng
          </Link>
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Tên nhãn hiệu</TableCell>
              <TableCell colSpan={2} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {brands.map((brand) => (
              <TableRow
                key={brand._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {brand._id}
                </TableCell>
                <TableCell align="left">{brand.name}</TableCell>
                <TableCell align="center">
                  <Button
                    color="info"
                    variant="outlined"
                    onClick={() => handleEditBrand(brand._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => handleDeleteBrand(brand._id)}
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

export default BrandAdmin;
