const express = require("express");
const { join } = require("path");
const { json, urlencoded } = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");

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

app.use(routes);

// setting static folder location
app.use(express.static(join(__dirname, "../client/dist")));

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
