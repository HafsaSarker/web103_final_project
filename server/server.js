import express from "express";
import cors from "cors";
import journalRoutes from "./routes/journals.js";
import eventRoutes from "./routes/events.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">✈️ Planorama API</h1>'
    );
});

app.use("/api/journals/users", journalRoutes);
app.use("/api/events/users", eventRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
