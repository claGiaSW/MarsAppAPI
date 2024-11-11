import express from "express";
import roverRouter from "../routes/roverRouter";

const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send(`Hello space traveller!
    What are you exploring today?
    A) /rover = all info
    B) /rover/photos = photos from that rover`)
});

app.use("/rover", roverRouter);

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});

export default app;