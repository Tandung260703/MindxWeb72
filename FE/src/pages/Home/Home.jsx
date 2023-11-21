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
import useDebounce from "~/hooks/useDebounce";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const debouncedValue = useDebounce(searchValue, 500);
  useEffect(() => {
    const fetchAPI = async () => {
      const result = await productApi.search(debouncedValue);
      setProducts(result.data);
    };

    fetchAPI();
  }, [debouncedValue]);

  useEffect(() => {
    productApi
      .getall()
      .then((res) => setProducts(res.data))
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
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
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
