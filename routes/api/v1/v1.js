const express = require("express");
const router = express.Router();
const pacientesRoutes = require("./pacientes/pacientes");
const expedientesRoutes = require("./expedientes/expedientes");
//const expredientesRoutes = require('./expredientes/expredientes');
//middlewares
router.use("/pacientes", pacientesRoutes);
router.use("/expedientes", expedientesRoutes);
//router.use("/expredientes", expredientesRoutes);
module.exports = router;
