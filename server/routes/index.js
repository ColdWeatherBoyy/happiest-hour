const { Router } = require("express");
const apiRoutes = require("./api/index.js");

const router = Router();

// sets route path when calling routes within api folder as /api
router.use("/api", apiRoutes);

module.exports = router;
