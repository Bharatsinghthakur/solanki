import express from "express";
import { connectDB } from "./utils/utils.js";
import { newUser } from "./controllers/user.js";

const port = 4000;

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("api working");
});

/*We used middleware for making the extension of the api for Forward Routes */
app.use("/api/v1/user", newUser);

// app.use("/api/v1/user");
app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
