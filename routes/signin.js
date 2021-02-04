// Initializing express framework with router
const express = require("express"),
  router = express.Router(),
  session = require("express-session"),
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
    // Function to render html page { index } with { signin }
    try {
      req.session.destroy();
    } catch (e) {
      console.log("No sessions stored!");
    }
    res.render("index", { page: "signin" });
  })
  // POST request
  .post("/", async (req, res) => {
    // Function to render html page { index } with { dashboard }
    /*
     * Function { userDoesExists() } to check if user exists
     * If { true }, renders the "dashboard" page
     * Else it sends a custom error
     */
    const userDoesExists = await firebaseTest.checkUserData(
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
    } else res.send("No user found or Email ID/ Password is incorrect!");
  });

module.exports = router;
