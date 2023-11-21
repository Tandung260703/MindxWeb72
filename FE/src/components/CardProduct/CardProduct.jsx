import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function CardProduct({ product }) {
  return (
    <Box
      sx={{
        px: "25px",
        py: "10px",
        // boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        borderRadius: 2,
        maxHeight: "375px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <img
          src={product.thumbnail || "/images/product.png"}
          alt=""
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      </Box>
      <Box>
        <Typography>{product.name}</Typography>
        <Typography sx={{ color: "red", fontWeight: 600, mt: 1 }} noWrap>
          {product.price} VND
        </Typography>
        <Button sx={{ mt: 1 }} size="md" variant="contained" color="success">
          Thêm vào giỏ hàng
        </Button>
      </Box>
    </Box>
  );
}

export default CardProduct;
