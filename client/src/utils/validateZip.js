// import isPostalCode from "validator/es/lib/isPostalCode";

const validateZipCode = (submittedZip) => {
	const zipCodeRegex = /^\d{5}$/;
	return zipCodeRegex.test(submittedZip);
};

export default validateZipCode;
