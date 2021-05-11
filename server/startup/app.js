import express from "express";
import cors from "cors";

/** Init express */
const app = express();

/** express middlewares */
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
