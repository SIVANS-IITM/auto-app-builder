import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;
const SECRET = process.env.APP_SECRET;

app.post("/api-endpoint", async (req, res) => {
  const body = req.body;

  if (body.secret !== SECRET) {
    return res.status(403).json({ error: "Invalid secret" });
  }

  console.log("✅ Received task:", body.task);
  res.status(200).json({
    message: "Request verified successfully.",
    task: body.task,
    round: body.round,
  });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
