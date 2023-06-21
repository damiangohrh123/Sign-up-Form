const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const lastnameInput = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phoneNumber');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');

//Error messages
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const phoneNumberError = document.querySelector('.phoneNumberError');
const passwordMatchError = document.querySelector('.passwordMatchError');
const lastnameError = document.querySelector('.lastNameError');

//REGEX
const emailRegex =   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//Name input validation
nameInput.addEventListener('input', (e) => {
  let nameLength = e.target.value.length;

  if (nameLength === 0 || (nameLength >= 3)) {
    nameInput.className = 'valid';
    nameError.textContent = '';
  }
  else {
    nameInput.className = 'invalid';
    nameError.textContent = 'Name should have 3 characters minimum';
  }
});

lastnameInput.addEventListener('input', (e) => {
  let lastNameLength = e.target.value.length;

  if (lastNameLength === 0 || lastNameLength >= 3) {
    lastnameInput.className = 'valid';
    lastnameError.textContent = '';
  }
  else {
    lastnameInput.className = 'invalid';
    lastnameError.textContent = 'Name should have 3 characters minimum'
  }
});

//Email validation
emailInput.addEventListener('input', (e) => {
  let emailInputValue = e.target.value;

  if (emailInputValue.length === 0 || emailRegex.test(emailInputValue)) {
    emailInput.className = 'valid';
    emailError.textContent = ''
  }
  else {
    emailInput.className = 'invalid';
    emailError.textContent = 'Please provide a proper email.';
  }
});

//Phone number validation
phoneNumberInput.addEventListener('input', (e) => {
  let numberValue = e.target.value.replace(/\D/g, '');

  if (numberValue.length < 8 && numberValue) {
    phoneNumberInput.className = 'invalid';
    phoneNumberError.textContent = 'Please provide a proper phone number.'
  }
  else if (numberValue.length == 0 || numberValue.length > 8) {
    phoneNumberInput.className = 'valid';
    phoneNumberError.textContent = '';
  }
  e.target.value = numberValue.slice(0, 8);
});

//Password input
passwordInput.addEventListener('input', (e) => {
  if (confirmPasswordInput.value === e.target.value) {
    confirmPasswordInput.className = 'valid';
    passwordMatchError.textContent = '';
  }
  else {
    confirmPasswordInput.className = 'invalid';
    passwordMatchError.textContent = 'Passwords don\'t match.';
  }
});

//Password confirmation match validation
confirmPasswordInput.addEventListener('input', (e) => {
  if (passwordInput.value === e.target.value) {
    confirmPasswordInput.className = 'valid';
    passwordMatchError.textContent = '';
  }
  else {
    confirmPasswordInput.className = 'invalid';
    passwordMatchError.textContent = 'Passwords don\'t match.';
  }
});
