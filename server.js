// Initializing express framework
const express = require("express"),
  path = require("path"),
  app = express(),
  PORT = process.env.PORT || 3000;

// Routes containing functions on how to handle request
const SIGN_UP_ROUTE = require("./routes/signup"),
  SIGN_IN_ROUTE = require("./routes/signin"),
  DELETE_USER = require("./routes/delete");

// EJS template engine setup
app.set("view engine", "ejs");

// setup public folder
app.set("public", path.join(__dirname, "views"));
app.use(express.static("./views"));
app.use(express.urlencoded({ extended: true })); // Allows express to accept JSON data from client side

// express routes
app.use("/", SIGN_UP_ROUTE); // Default route => GET request
app.use("/signin", SIGN_IN_ROUTE); // sign-in route => GET request
app.use("/signin/dashboard", SIGN_IN_ROUTE); // Sign-in/Dashboard route => POST request
app.use("/signup/dashboard", SIGN_UP_ROUTE); // Sign-up/Dashboard route => POST request
app.use("/new_user", DELETE_USER); // delete an exisitng user from database => DELETE request

// 404 Error
app.use(function (req, res) {
  res.status(404).send({ message: "Requested" + req.url + " Not found." });
});

// 500 Error
app.use(function (err, req, res) {
  return res.status(500).send({ error: err });
});

// Start server in { PORT }
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
