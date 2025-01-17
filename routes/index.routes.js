const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const authRouter = require("./auth.routes")
router.use("/auth", authRouter)

const userRoutes = require("./user.routes")
router.use("/user", userRoutes)

module.exports = router;
