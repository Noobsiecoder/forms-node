// Modules which contains senstive firebase data which is stored under "modules" file
const admin = require("./firebase/modules");

let db = admin.database(); // Connecting Firebase database
let ref = db.ref("server"); // Referencing key value from firebase

// Function to add user credential into firebase database
const addUserData = async (emailId, password) => {
  let usersRef = ref.child(emailId.replace(/[.]/g, ""));
  usersRef.set({
    email: emailId,
    password: password,
  });
};

// Function to check if user credentials from firebase database
const checkUserData = async (emailId, password) => {
  let user;
  let usersRef = ref.child(emailId.replace(/[.]/g, ""));
  await usersRef.once("value", (snapshot) => {
    if (snapshot.exists() && password === snapshot.val()["password"])
      // Check if user exists and also check if password is correct
      user = snapshot.exists();
    else user = false;
  });
  return user;
};

// Function to check if user credentials from firebase database and then to add user data into database
const CheckUserExists = async (emailId, password) => {
  let user;
  let usersRef = ref.child(emailId.replace(/[.]/g, ""));
  await usersRef.once("value", (snapshot) => {
    if (snapshot.exists())
      // Check if user exists
      user = false;
    else {
      user = true;
      addUserData(emailId, password);
    }
  });
  return user;
};

// Delete user credential from firebase database
const deleteUserData = (userId) => {
  let usersRef = ref.child(userId.replace(/[.]/g, ""));
  usersRef.remove();
};

module.exports = {
  addUserData,
  deleteUserData,
  checkUserData,
  CheckUserExists,
};
