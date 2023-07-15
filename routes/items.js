// import required essentials
const express = require("express");
const { faker } = require("@faker-js/faker");

// create new router
const router = express.Router();

// create a JSON data array
let data = [];
// Generate 10000 mock objects
for (let i = 1; i <= 10000; i++) {
  const object = {
    id: i,
    subject: `Ticket ${i}`,
    priority: faker.helpers.arrayElement(["low", "medium", "high"]),
    status: faker.helpers.arrayElement(["to do", "in progress", "done"]),
    description: faker.lorem.sentence(),
  };
  data.push(object);
}

// get all tickets
router.get("/", function (req, res) {
  res.status(200).json(data);
});

// get a ticket by id
router.get("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

// Create a new ticket
router.post("/", function (req, res) {
  const object = req.body;
  data.push(object);
  res.status(201).json(data);
});

// Update an existing object
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const objectIndex = data.findIndex((obj) => obj.id == id);

  if (objectIndex === -1) {
    res.status(404).json({ error: "Object not found" });
  } else {
    data[objectIndex] = req.body;
    res.json(data[objectIndex]);
  }
});

module.exports = router;
