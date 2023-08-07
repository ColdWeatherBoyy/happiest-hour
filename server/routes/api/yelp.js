const { Router } = require("express");
require("dotenv").config({ path: "../.env" });

const router = Router();

// Yelp API key
const YELP_API_KEY = process.env.YELP_API_KEY;

// GET /api/yelp/:zipCode for Yelp API
router.get("/:zipCode", async (req, res) => {
	const { zipCode } = req.params;
	const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=happy%20hour&location=${zipCode}&limit=12&sort_by=rating`;
	const headers = {
		Authorization: `Bearer ${YELP_API_KEY}`,
		"Content-Type": "application/json",
	};
	const response = await fetch(yelpUrl, { headers });
	const data = await response.json();
	res.json(data);
});

module.exports = router;
