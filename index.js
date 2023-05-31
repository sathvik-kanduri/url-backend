import express from "express";
import cors from "cors";
import db from "./config/db.js";

import urlRoute from "./routes/urlroute.js"

const app = express();

app.use(cors());
app.use(express.json());

db.once("open", () => {   
  console.log("Connected to database");
});

db.on("error", (err) => {
  console.log("Database error:", err);
});

app.use("/",urlRoute);

app.listen(5000, () => {
  console.log(`server started on http://localhost:${8000}`);
});
