import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("It Works!")
});

router.get("/signup", (req, res) => {
    res.send("It Signup!")
});

router.get("/login", (req, res) => {
    res.send("It login!")
});

export default router;