import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function CartBadge() {
  return (
    <Badge badgeContent={4} color="info">
      <Link to="/cart" style={{ color: "white" }}>
        <ShoppingCartIcon color="white" sx={{ cursor: "pointer" }} />
      </Link>
    </Badge>
  );
}

export default CartBadge;
