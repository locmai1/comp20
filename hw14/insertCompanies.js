var mongo = require("mongodb");
var readline = require("readline");
var fs = require("fs");

// Create a new MongoClient
var MongoClient = mongo.MongoClient;
const uri =
  "mongodb+srv://<user>:<password>@<cluster_link>/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function insertCompany(line, db) {
  const [company, ticker, price] = line.split(",");

  // Insert data into MongoDB
  await db.collection("companies").insertOne({
    company: company,
    ticker: ticker,
    price: parseFloat(price),
  });

  // Display data in the console
  console.log(`Inserted: ${company}, ${ticker}, ${parseFloat(price)}`);
}

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Get specific database
    const db = client.db("stocktickerapp");

    var file = readline.createInterface({
      input: fs.createReadStream("companies-1.csv"),
    });

    for await (const line of file) {
      await insertCompany(line, db);
    }

    console.log("Finished processing file");
  } catch (err) {
    console.log("Database error: " + err);
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB");
  }
}

run();
