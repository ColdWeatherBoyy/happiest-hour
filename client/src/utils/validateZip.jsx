import isPostalCode from "validator/lib/isPostalCode";

const validateZipCode = (submittedZip) => {
	// const zipCodeRegex = /^\d{5}$/;
	// return zipCodeRegex.test(submittedZip);
	return isPostalCode(submittedZip, "US");
};

export default validateZipCode;
