// import isPostalCode from "validator/es/lib/isPostalCode";

const validateZipCode = (submittedZip) => {
	// Uses RegEx to check if the submitted zip code is a valid US zip code (5 digits)
	const zipCodeRegex = /^\d{5}$/;
	return zipCodeRegex.test(submittedZip);
};

export default validateZipCode;
