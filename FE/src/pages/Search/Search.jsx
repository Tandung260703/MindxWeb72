import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <Container sx={{ mt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box sx={{ display: "flex", width: "100%" }}>
          <TextField
            id="filled-search"
            label="Nhập tên sản phẩm"
            type="search"
            variant="filled"
            sx={{ width: "100%" }}
          />
          <Button variant="contained" sx={{ bgcolor: "primary.main" }}>
            <SearchIcon></SearchIcon>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Search;
