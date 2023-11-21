import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CardProduct from "~/components/CardProduct";
import { useEffect, useState } from "react";
import { productApi } from "~/api";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productApi
      .getall()
      .then((res) => console.log("res ->", setProducts(res.data)))
      .catch(() => setProducts([]));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Sản phẩm mới
        </Typography>
        <Box>
          <TextField
            size="small"
            id="outlined-search"
            label="Nhập tên sản phẩm..."
            type="search"
          />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {products.length <= 0 ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body2">
              Hiện tại chưa có sản phẩm nào...
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={2}>
            {products.map((product, index) => (
              <Grid key={index} item xs={3}>
                <Item>
                  <CardProduct product={product}></CardProduct>
                </Item>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default Home;
