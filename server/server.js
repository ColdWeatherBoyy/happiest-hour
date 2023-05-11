const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// express middleware for parsing
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

// setting static folder location
app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
