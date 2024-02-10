import index from "./routes/index.js";
import express from 'express'
import { urlencoded } from "express";
const app = express();

app.use(urlencoded({extended: true}))
app.use(index);


app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
