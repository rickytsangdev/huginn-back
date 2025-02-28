const express = require("express");

const app = express();

const PORT = parseInt(process.env.PORT) || 8800;

const userRouter = require("./routes/user");

app.use(express.json());

require("dotenv").config();

// mongodb connetion with mongoose
const mongoose = require("mongoose");
const uri = process.env.DB_CONNECT;
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
run().catch(console.dir);

app.get("/api", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
