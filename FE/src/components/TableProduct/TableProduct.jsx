import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import { productApi } from "~/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function createData(name, calories, fat, protein) {
  return { name, calories, fat, protein };
}

const rows = [
  createData(1, "Frozen yoghurt", 159000000, 6.0, 4.0),
  createData(2, "Ice cream sandwich", 237000000, 9.0, 4.3),
  createData(3, "Eclair", 262000000, 16.0, 6.0),
  createData(4, "Cupcake", 305000000, 3.7, 4.3),
  createData(5, "Gingerbread", 356000000, 16.0, 3.9),
];

export default function BasicTable() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    productApi
      .getall()
      .then((res) => setProducts(res.data))
      .catch(() => setProducts([]));
  }, []);

  const handleDeleteProduct = (id) => {
    productApi.delete(id).then((res) => {
      setProducts((prev) => prev.filter((item) => item._id != id));
    });
  };

  const handleEditProduct = (id) => {
    navigate(`/admin/product/edit/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Tên sản phẩm</TableCell>
            <TableCell align="left">Giá sản phẩm&nbsp;(VND)</TableCell>
            <TableCell align="left">Ảnh dại diện</TableCell>
            <TableCell colSpan={2} align="center">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product._id}
              </TableCell>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="left">{product.price}</TableCell>
              <TableCell align="left">
                <img src={product.thumbnail} alt="" width={30} height={30} />
              </TableCell>
              <TableCell align="left">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                  >
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
