import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

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
app.use(cookieParser());

export default app;
