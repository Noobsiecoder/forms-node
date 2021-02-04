// Initializing express framework with router
const express = require("express"),
  session = require("express-session"),
  router = express.Router(),
  firebaseTest = require("../api/firebase"); // Initializing with firebase api

// Setting up local-session-storage
router.use(
  session({
    // It holds the secret key for session
    secret: "Your_Secret_Key",

    // Forces the session to be saved
    // back to the session store
    resave: true,

    // Forces a session that is "uninitialized"
    // to be saved to the store
    saveUninitialized: true,
  })
);

router
  // GET request
  .get("/", (req, res) => {
    // Function to render html page { index } with { signup }
    res.render("index", { page: "signup" });
  })
  // POST request
  .post("/", async (req, res) => {
    // Function to render html page { index } with { dashboard }
    /*
     * Function { userDoesExists() } to check if user doesn't already exists
     * If { true }, renders the "dashboard" page
     * Else it sends a custom error
     */
    const userDoesExists = await firebaseTest.CheckUserExists(
      req.body.email,
      req.body.password
    );
    if (userDoesExists) {
      req.session.email = req.body.email;
      res.render("index", {
        page: "dashboard",
        email: req.body.email,
        password: req.body.password,
      });
    } else res.send("User already exists!");
  });

module.exports = router;
