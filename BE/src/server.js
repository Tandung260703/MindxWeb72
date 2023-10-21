const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDb } = require("./configs/database");
const route = require("./routes/index.js");

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

route(app);
connectDb();
app.listen(port, () => {
  console.log(
    `[SUCCESS] Server is running on PORT: ${port} -> http://localhost:${port}`
  );
});
