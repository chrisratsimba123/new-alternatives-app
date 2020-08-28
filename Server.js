const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const testimonialsRoutes = require("./Routes/Testimonials");
const db = require("./DB/Connections");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

app.get("/", (req, res) => res.send("Howdy team!"));

app.use("/api", testimonialsRoutes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));