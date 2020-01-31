const express = require("express");
const app = express();
const PORT = 1337;

app.get("/", (req, res) => {
  res.send("hey buddy");
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
