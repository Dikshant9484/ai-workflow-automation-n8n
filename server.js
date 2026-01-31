import express from "express";

const app = express();
app.use(express.json());

app.post("/generate", async (req, res) => {
  try {
    const response = await fetch(
      "https://dikshant3697.app.n8n.cloud/webhook/linkedin-post-v2",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Backend failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
