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

// POST request
router.post("/", (req, res) => {
  // Function to delete user and then to render html page { index } with { signup }
  firebaseTest.deleteUserData(req.session.email);
  req.session.destroy();
  res.render("index", { page: "signup" });
});

module.exports = router;
