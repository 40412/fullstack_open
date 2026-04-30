const express = require("express");
const app = express();

let persons = require("./data.json");

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/info", (req, res) => {
  const count = persons.length;
  const time = new Date();

  res.send(`
    <p>Phonebook has info for ${count} people</p>
    <p>${time}</p>
  `);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
