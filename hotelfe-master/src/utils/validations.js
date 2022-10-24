export const emailValidation = (value) => {
	const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return !value.match(emailRegex) ? "Invalid Email!" : "";
};

export const phoneValidation = (value) => {
	const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{9,16}$/g;

	return !value.match(phoneRegex) ? "Invalid Phone Number!" : "";
};

export const requiredValidation = (value) => {
	return value === "" || value === undefined ? "This field is required!" : "";
};

export const passwordValidation = (value) => {
	return value.length < 5 ? "Password needs more charactecrs!" : "";
};

export const matchPasswords = (value, secondValue) => {
	return value !== secondValue ? "Values does not match!" : ""
}