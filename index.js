const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/", (req, res) => {
  const { str } = req.body;

  const wordRegex = /\b\w+\b/g;

  const wordCount = (str.match(wordRegex) || []).length;

  if (wordCount >= 8) {
    res.status(200).send("200 OK\n");
  } else {
    res.status(406).send("406 Not Acceptable\n");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
