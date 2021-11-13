import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Home Works")
});

router.get("/search", (req, res) => {
    res.send("Search works")
});

export default router;