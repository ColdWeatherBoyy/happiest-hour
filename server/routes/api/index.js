const { Router } = require("express");
const yelpRoutes = require("./yelp.js");

const router = Router();

// /api/yelp endpoint for endpoints in yelp.js
router.use("/yelp", yelpRoutes);

module.exports = router;
