const express = require("express");

const app = express();

const PORT = parseInt(process.env.PORT) || 8800;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//