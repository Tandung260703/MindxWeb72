import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categoryApi } from "~/api/categoryApi";

function EditCategoryAdmin() {
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    categoryApi.detail(id).then((res) => setCategoryName(res.data.name));
  }, []);

  const handleEditCategory = () => {
    const data = {
      name: categoryName,
    };

    categoryApi.update(id, data).then((res) => {
      navigate("/admin/category");
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
        label="Tên danh mục"
        type="text"
        required
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <Button color="success" variant="contained" onClick={handleEditCategory}>
        Lưu
      </Button>
    </Box>
  );
}

export default EditCategoryAdmin;
