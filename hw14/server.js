const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("mongodb");

const app = express();
const port = 5500;
const uri =
  "mongodb+srv://lmai:lmai@cluster0.nq5tg7n.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true }));

// Rendering index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// POST route to lookup stock information
app.post("/lookup", async (req, res) => {
  const client = new mongo.MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("stocktickerapp");
    const collection = db.collection("companies");

    const searchType = req.body.type;
    const searchInput = req.body.input;

    const result = await collection
      .find(
        searchType == "company"
          ? { company: searchInput }
          : { ticker: searchInput }
      )
      .toArray();

    res.send(result);
  } catch (err) {
    console.log("Database error: " + err);
    res.status(500).send("Internal Server Error");
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB");
  }
});

// Run server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
