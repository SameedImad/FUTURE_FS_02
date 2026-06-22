const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB=require("./config/db.js")

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());


const leadRoutes = require("./routes/leadRoute.js");

app.use("/api/leads", leadRoutes);

const adminRoutes = require("./routes/adminRoute");
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Hello Working");
});

connectDB();

app.listen(PORT, () => {
  console.log(`Backend is working on port ${PORT}!!`);
});
