import { Router } from "express";

const router = Router();

router.get("/ping", async (req, res) => {
  res.send("Pong");
});

export default router;
