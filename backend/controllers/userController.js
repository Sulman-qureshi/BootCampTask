const bcrypt = require("bcryptjs");
const signupSchema = require("../models/SignupSchema");
const Teacher = require("../models/teacherSchema");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require("dotenv").config({ path: "./vars/.env" });
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  })
);

// signup user endpoint, name, email and password are required fields for this API
exports.Signup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("User register data: ", name, email, password);
  try {
    if (!name || !email || !password) {
      return res.status(401).send({ status: 401, message: "kindly fill all fields!" });
    }
    const existingUser = await signupSchema.findOne({ email });

    if (existingUser) {
      return res.send({status:400, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);

    const newUser = new signupSchema({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).send({ status:201, message: "User registered" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status:500, message: "Server error" });
  }
};

let email1 = null;

// login user endpoint, email and password is required for this API
exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("User login details: ", email, password);
    if (!email || !password) {
      return res.send({ status:400, message: "Email or Password missing..." });
    }

    const userLogin = await signupSchema.findOne({ email: email});

    if (userLogin) {
      console.log(
        "User found in databse, lets match password ",
        userLogin.email
      );
      email1 = email;

      const isMatch = await bcrypt.compare(password, userLogin.password);
      console.log("password matched , ", isMatch);
      if (!isMatch) {
        console.log("email or password is invalid, try again")
        res.send({
          status: 400,
          message: "email or password is invalid, try again",
        });
      } else {
        const token = await userLogin.generateAuthToken();
        console.log("Token : " + token);

        res.send({
          status: 200,
          token: token,
          username:userLogin.name,
          message:"Login successful"
        });
      }
    } else {
      res.send({ status:400,message: "invalid credentials!" });
    }
  } catch (err) {
    console.log(err);
  }
};


// Reset password endpoint, need user email to send reset assword link
exports.ResetPassword = async (req, res) => {
  console.log("Received email for reset password: ", req.body.email);

  // using package to generate a unique code/token for reseting password
  await crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");

    signupSchema.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        console.log("Error occurred");
        return res.send({ status:422, error: "User does not exist with that email" });
      }
      console.log("User found");
      console.log("Token : " + token);
      user.resetToken = token;
      user.expireToken = Date.now() + 3600000;
      user.save().then((result) => {
        console.log("response after reset request ", result);
        // sending email to registered user
        transporter.sendMail({
          to: user.email,
          from: "	safdarhussain.bcsf18@iba-suk.edu.pk",
          subject: "password reset",
          html: `
                    <p>You requested for password reset</p>
                    <h5>click in this <a href="http://localhost:3000/reset/${token}">link</a> to reset password</h5>
                    `,
        });
        console.log("Email sent");
        res.send({ message: "check your email" });
      });
    });
  });
};

// new password endpoint, new password and reset token are required fields to update password 
exports.NewPassword = (req, res) => {
  const newPassword = req.body.password;
  const sentToken = req.body.token;
  console.log("Received new Password and Token: ", newPassword, sentToken);
  signupSchema
    .findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then((user) => {
      if (!user) {
        console.log("resetTime and token not found or expired");
        return res.send({ status: 422, error: "Try again session expired" });
      }
      console.log("User after reset time matched : ", user);
      bcrypt.hash(newPassword, 10).then((hashedpassword) => {
        console.log("Hashed New Password: ", hashedpassword);
        user.password = hashedpassword;

        // once password is reset, I am removing resetToken and expireToken from database
        user.resetToken = undefined;
        user.expireToken = undefined;
        user.save().then((saveduser) => {
          console.log("Response after passwrod update: ", saveduser);
          res.send({ message: "Password updated successfully" });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }


exports.getTeacher = async (req, res)=>{
      try {
          const TeacherData = await Teacher.find({});
          res.status(200).send({message:"Received data successfully", data:TeacherData})
      } catch (error) {
        console.log("Error: ", error.message)
          res.status(500).send({message:error})
      }
};


 exports.CreateTeacher =   async (req, res)=>{
      try {
          const payload = req.body;
          const teacher = new Teacher(payload);
          const TeacherData = await teacher.save();
          res.status(201).send({message:"User Create successfully", data:TeacherData})
      } catch (error) {
          res.status(500).send({message:error})
      }
  
}
