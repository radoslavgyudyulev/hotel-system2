import {
	emailValidation,
	phoneValidation,
	requiredValidation,
	passwordValidation,
	matchPasswords
} from "utils/validations";

const takeValidation = (validation, value, secondValue) => {
	switch (validation) {
		case "emailValidation":
			return emailValidation(value);
		case "phoneValidation":
			return phoneValidation(value);
		case "requiredValidation":
			return requiredValidation(value);
		case "passwordValidation":
			return passwordValidation(value);
		case "matchPasswords":
			return matchPasswords(value, secondValue)
	}
};

const validate = (items) => {
	let errors = {};

	Object.keys(items).map((item) => {
		errors = {
			...errors,
			[item]: []
		};

		items[item].validate.map((validation) => {
			const errorKey = item;
			const errorValue = items[errorKey].value;
			const errorSecondValue = items[errorKey].secondValue;

			errors[errorKey].push(takeValidation(validation, errorValue, errorSecondValue));

			errors[errorKey] = errors[errorKey].filter((e) => e !== "");
		});
	});

	return errors;
};

export default validate;