import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { brandApi } from "~/api/brandApi";

function CreateBrandAdmin() {
  const [brandName, setBrandName] = useState("");
  const navigate = useNavigate();

  const handleCreateBrand = () => {
    const data = {
      name: brandName,
    };

    brandApi.create(data).then((res) => {
      navigate("/admin/brand");
    });
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        sx={{ width: "100%", mb: 2 }}
        size="small"
        id="outlined-search"
        label="Tên nhãn hàng"
        type="text"
        required
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
      />
      <Button color="success" variant="contained" onClick={handleCreateBrand}>
        Tạo nhãn hàng
      </Button>
    </Box>
  );
}

export default CreateBrandAdmin;
