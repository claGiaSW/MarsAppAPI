import express from "express";

const app = express();
const port = 5000;

app.use(express.json());
const router = express.Router();

router.get('/', (req: any, res: any) => res.send('Hello world !'));
app.use('/', router);

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});
