import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { brandApi } from "~/api/brandApi";

function EditBrandAdmin() {
  const [brandName, setBrandName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    brandApi.detail(id).then((res) => setBrandName(res.data.name));
  }, []);

  const handleEditBrand = () => {
    const data = {
      name: brandName,
    };

    brandApi.update(id, data).then((res) => {
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
      <Button color="success" variant="contained" onClick={handleEditBrand}>
        Lưu
      </Button>
    </Box>
  );
}

export default EditBrandAdmin;
