const express = require("express");
const cors = require("cors");
require("dotenv").config();

const bookingsRouter = require("./routes/bookings");
const servicesRouter = require("./routes/services");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/bookings", bookingsRouter);
app.use("/api/services", servicesRouter);

app.get("/", (req, res) => {
  res.json({ message: "Bokningssystem API är igång!" });
});

app.listen(PORT, () => {
  console.log(`Server körs på port ${PORT}`);
});
