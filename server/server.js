const express = require("express");
const { join } = require("path");
const { json, urlencoded } = require("express");
require("dotenv").config({ path: "../.env" });
const cors = require("cors");

const YELP_API_KEY = process.env.YELP_API_KEY;

const app = express();

const PORT = process.env.PORT || 3001;

// cors middleware
app.use(cors());

// express middleware for parsing
app.use(json());
app.use(
	urlencoded({
		extended: true,
	})
);

// setting static folder location
app.use(express.static(join(__dirname, "../client/dist")));

// creat a new route in that accepts a query parameter for the yelp api endpoint and forwards the request to the yelp api
app.get("/api/yelp", async (req, res) => {
	// const { location } = req.query;
	const location = "11225";
	const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=happy%20hour&location=${location}&limit=12&sort_by=rating`;
	const headers = {
		Authorization: `Bearer ${YELP_API_KEY}`,
		"Content-Type": "application/json",
	};
	const response = await fetch(yelpUrl, { headers });
	const data = await response.json();
	res.json(data);
});

// set up a route to serve index.html
// app.get("/", (req, res) => {
// 	res.sendFile(join(__dirname, "../client/dist/index.html"));
// });

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
