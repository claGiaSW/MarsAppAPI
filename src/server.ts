import express from "express";
import apiRoutes from "../routes/routes";

const app = express();
const port = 3000;

// app.use(express.json());
// const router = express.Router();

// router.get('/', (req: any, res: any) => {
//   res.send("Hello")
// });

app.get('/', (req: any, res: any) => {
  res.send("Hello")
});
app.get("/ipl", apiRoutes);

// app.use('/', router);

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});

export default app;