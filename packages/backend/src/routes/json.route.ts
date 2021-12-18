import axios from "axios";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return res.status(200).json(response.data);
  } catch (error) {
    return res.send(error);
  }
});

export default router;
