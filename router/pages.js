const express =require("express");
const router=express.Router();
router.get("/", (req,res) => {
    //res.send("<h1>Hello AK </h2>");
    res.render("login");
});
router.get("/register", (req,res) => {
    //res.send("<h1>Hello AK </h2>");
    res.render("register");
});
router.get("/profile", (req,res) => {
    //res.send("<h1>Hello AK </h2>");
    res.render("profile");
});
router.get("/home", (req,res) => {
    //res.send("<h1>Hello AK </h2>");
    res.render("home");
});
module.exports = router;