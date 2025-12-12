import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./db/config.js";
import authRouter from "./routes/authRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

// Routes
app.get("/", (req, res) => {
  res.send("API Working...");
});
app.use("/api/auth", authRouter);

connectDB();

app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});
