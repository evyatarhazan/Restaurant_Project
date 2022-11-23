import express from 'express';

const router  = express.Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

export default router;


