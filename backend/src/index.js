require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_ORIGIN }));

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`SmartFood backend attivo sulla porta ${port}`));
