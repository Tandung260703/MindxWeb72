import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productApi } from "~/api";
import { brandApi } from "~/api/brandApi";
import { categoryApi } from "~/api/categoryApi";

function EditProductAdmin() {
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [isHot, setIsHot] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [brandId, setBrandId] = useState("");

  const [previewImage, setPreviewImage] = useState("");
  const [imageUpload, setImageUpload] = useState(undefined);
  const inputFileRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    productApi.detail(id).then((res) => {
      const pr = res.data;
      setProduct(pr);
      setProductName(pr.name);
      setPrice(pr.price);
      setQuantity(pr.quantity);
      setIsHot(pr.isHot);
    });
  }, []);

  useEffect(() => {
    categoryApi.getAll().then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    brandApi.getAll().then((res) => setBrands(res.data));
  }, []);

  const handlePreviewImage = (e) => {
    if (e.target.files) {
      if (typeof e.target.files[0] !== "undefined") {
        const imageUpload = e.target.files[0];
        setImageUpload(imageUpload);
        const objImageUrl = URL.createObjectURL(imageUpload);
        setPreviewImage(objImageUrl);
      }
    }
  };

  const handleCreateProduct = () => {
    const dataForm = new FormData();
    dataForm.append("name", productName);
    dataForm.append("price", price);
    dataForm.append("quantity", quantity);
    dataForm.append("categoryId", categoryId);
    dataForm.append("brandId", brandId);
    dataForm.append("thumbnail", imageUpload, "thumbnail");

    productApi.update(id, dataForm).then((res) => {
      navigate("/admin/product");
    });
  };

  return (
    <>
      <Link
        to={"/admin/product"}
        style={{
          color: "black",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <ArrowBackIcon></ArrowBackIcon>
        Trở về
      </Link>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            sx={{
              width: "300px",
              height: "300px",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                borderRadius: "10px",
                width: "100%",
                height: "100%",
                boxShadow: 1,
                overflow: "hidden",
              }}
            >
              <img
                src={previewImage || product?.thumbnail}
                alt="avatar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: 2,
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                color="success"
                onClick={() => inputFileRef.current?.click()}
              >
                <AddPhotoAlternateIcon></AddPhotoAlternateIcon>
              </Button>
              <Button
                variant="outlined"
                sx={{ width: "100%" }}
                color="error"
                onClick={() => setPreviewImage("")}
              >
                &times;
              </Button>
              <input
                accept="image/*"
                ref={inputFileRef}
                type="file"
                hidden
                onChange={handlePreviewImage}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  sx={{ width: "100%" }}
                  size="small"
                  id="outlined-search"
                  label="Tên sản phẩm"
                  type="text"
                  required
                  onChange={(e) => setProductName(e.target.value)}
                  value={productName}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ width: "100%" }}
                  size="small"
                  id="outlined-number"
                  label="Price"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </Grid>
              <Grid item xs={6}>
                <FormGroup sx={{ width: "100%" }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Hot"
                    onChange={(e) => {
                      setIsHot((prev) => !prev);
                    }}
                    value={isHot}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ width: "100%" }}
                  size="small"
                  id="outlined-number"
                  label="Quantity"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  size="small"
                  disablePortal
                  id="combo-box-demo"
                  options={categories.map((category) => ({
                    label: category.name,
                    ...category,
                  }))}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Danh mục" />
                  )}
                  onChange={(e, v) => setCategoryId(v._id)}
                  value={categoryId}
                />
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  size="small"
                  disablePortal
                  id="combo-box-demo"
                  options={brands.map((brand) => ({
                    ...brand,
                    label: brand.name,
                  }))}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Hãng sản xuất" />
                  )}
                  onChange={(e, v) => setBrandId(v._id)}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              sx={{ width: "100%", mt: 2 }}
              color="success"
              onClick={handleCreateProduct}
            >
              Lưu
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default EditProductAdmin;
