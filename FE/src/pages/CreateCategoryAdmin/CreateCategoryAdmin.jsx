import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoryApi } from "~/api/categoryApi";

function CreateCategoryAdmin() {
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  const handleCreateCategory = () => {
    const data = {
      name: categoryName,
    };

    categoryApi.create(data).then((res) => {
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
      <Button
        color="success"
        variant="contained"
        onClick={handleCreateCategory}
      >
        Tạo danh mục
      </Button>
    </Box>
  );
}

export default CreateCategoryAdmin;
