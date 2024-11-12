import express from "express";
import roverRouter from "../routes/roverRouter";

const app = express();

app.get("/", (req: any, res: any) => {
  res.send(`Hello space traveller!
    What are you exploring today?
    A) /rover = all info
    B) /rover/photos = photos from that rover`)
});

app.use("/rovers", roverRouter);

export default app;