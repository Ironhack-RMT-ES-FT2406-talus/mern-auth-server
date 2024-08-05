const router = require("express").Router();
const {tokenValidation, adminValidation} = require("../middlewares/auth.middlewares");
const User = require("../models/User.model");

// GET "/api/user/own" => el usuario ve su propio perfil
router.get("/own", tokenValidation, async (req, res, next) => {

  console.log("accediendo a ruta")
  console.log(req.payload) // cualquier ruta que haya usando el tokenValidation tienen acceso al req.payload (el usuario que está haciendo la solicitud)

  try {
    
    const response = await User.findById(req.payload._id)
    res.json(response)

  } catch (error) {
    next(error)
  }


})

router.get("/admin", tokenValidation, adminValidation, (req, res, next) => {
  console.log("Esta ruta solo es accesible para usuario logeados y de tipo admin")
})


module.exports = router