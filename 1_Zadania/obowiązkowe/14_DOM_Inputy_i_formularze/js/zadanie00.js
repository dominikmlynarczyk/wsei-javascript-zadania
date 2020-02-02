document.addEventListener('DOMContentLoaded', () => {
	function validate() {
		if (
			(isEmailValid() &&
				isNameLongEnough() &&
				isSurnameLongEnough() &&
				arePasswordsValid() &&
				isCheckboxChecked()) === false
		) {
			event.preventDefault();
		}
	}

	document.querySelector('form').addEventListener('submit', validate);

	function showMessage(message) {
		// W zadaniu niewykorzystywany jest element div.success-message
		// const successMessage = document.querySelector('.success-message');
		const errorMessage = document.querySelector('.error-message');
		errorMessage.innerText = message;
	}

	function isEmailValid() {
		const email = document.querySelector('#email');
		const isValid = email.value.includes('@');
		if (!isValid) {
			showMessage('Email musi posiadać znak @');
			return false;
		}
		return true;
	}

	function isNameLongEnough() {
		let name = document.querySelector('#name');
		let isValid = name.value.length > 6;
		if (!isValid) {
			showMessage('Twoje imię jest za krótkie');
			return false;
		}
		return true;
	}

	function isSurnameLongEnough() {
		let surname = document.querySelector('#surname');
		let isValid = surname.value.length > 6;
		if (!isValid) {
			showMessage('Twoje nazwisko jest za krótkie');
			return false;
		}
		return true;
	}

	function arePasswordsValid() {
		let password1 = document.getElementById('pass1');
		let password2 = document.getElementById('pass2');
		let isValid = password1.value === password2.value && password1.value.length > 0;
		if (!isValid) {
			showMessage('Hasła nie są takie same lub puste');
			return false;
		}
		return true;
	}

	function isCheckboxChecked() {
		let checkbox = document.getElementById('agree');
		let isChecked = checkbox.checked;
		if (!isChecked) {
			showMessage('Musisz zaakceptować warunki');
			return false;
		}
		return true;
	}
});
