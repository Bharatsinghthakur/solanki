import express from "express";
import { connectDB } from "./utils/features.js";

const port = 4000;
connectDB();
const app = express();


app.get("/", (req, res) => {
  res.send("API WORKING WITH /API/V1");
});

app.use("/api/v1/user");
app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
