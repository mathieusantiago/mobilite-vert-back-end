const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log("🔐 Connected to MongoDB"))
  .catch((err) => console.log("❌ failed to connect to MongoDB", err));
