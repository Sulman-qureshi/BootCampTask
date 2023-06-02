const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Sign up route
router.post("/signup", userController.Signup);
// login up route
router.post("/login", userController.Login);
// new-password route
router.post("/new-password", userController.NewPassword);
// reset-password route
router.post("/reset-password", userController.ResetPassword);
//get teacher data
router.get("/teacher", userController.getTeacher);
// create teacher
router.post("/create", userController.CreateTeacher);
module.exports = router;