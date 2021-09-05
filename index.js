const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const app = express();
const db = require("./config/mongoose");

app.use(express.json());

app.use("/", require("./routes"));

app.listen(PORT || 3000, () => {
  console.log(`Server is running at ${PORT}`);
});
