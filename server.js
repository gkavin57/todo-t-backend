const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

require("./models/db");
app.use(express.json());
app.use(cors());

app.use("/api/tasks", router);
const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is started at PORT number ${PORT}`);
});
