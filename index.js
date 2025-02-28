const express = require("express");

const app = express();

const PORT = parseInt(process.env.PORT) || 8800;

app.use(express.json());

// import dotenv
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
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/api/user", userRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
