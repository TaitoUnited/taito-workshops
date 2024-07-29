const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Log all requests
app.use((req, res, next) => {
  console.log(`Request to ${req.path}`);
  next();
});

app.get("/data", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.get("*", (req, res) => {
  console.log(`Request to ${req.path} was not found`);
  res.status(404).json({ message: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
