const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const userController = require("./controllers/users");
const admin = require("firebase-admin");

const app = express();

require("dotenv").config();
const {
  PORT = 3001,
  CLIENT_ID,
  PRIVATE_KEY,
  DATABASE_URL,
  PRIVATE_KEY_ID,
} = process.env;

mongoose.connect(DATABASE_URL);
const db = mongoose.connection;

db.on("connected", () => console.log("Connectes to MongoDB"));
db.on("disconnected", () => console.log("Disconnected to MongoDb"));
db.on("error", (error) => console.log("MongoDB has an error" + error.message));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

admin.initializeApp({
    credential: admin.credential.cert({
  "type": "service_account",
  "project_id": "react-crm-27302",
  "private_key_id": PRIVATE_KEY_ID,
  "private_key": PRIVATE_KEY.replace(/\\n/g, "\n"),
  "client_email": "firebase-adminsdk-gpkyn@react-crm-27302.iam.gserviceaccount.com",
  "client_id": CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gpkyn%40react-crm-27302.iam.gserviceaccount.com"
    })
})

app.use(async function (req, res, next) {
  const token = req.get("Authorization");

  if (token) {
    const authUser = await admin
      .auth()
      .verifyIdToken(token.replace("Bearer", " "));
    req.user = authUser;
  }

  next();
});

// router auth middleware function
function isAuthenticated(req, res, next) {
  if (req.user) return next();
  else res.status(401).json({ message: "unauthorized" });
}


// routes
app.get("/", (req, res) => {
  res.send("Please go to http://localhost:3000/api, thank you!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the Mason's App API" });
});

app.use("/api/", isAuthenticated, userController);

app.get("/api/*", (req, res) => {
  res.status(404).json({ message: "That route was not found" });
});





app.listen(PORT, () => console.log(`Express is listening on port:${PORT}`));
