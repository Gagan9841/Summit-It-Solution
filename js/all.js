const form = document.querySelector('form');
const fullNameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const phoneInput = form.querySelector('input[type="tel"]');
const messageTextarea = form.querySelector('textarea');
const formContainer = form.parentElement;
const popup = document.querySelector('.popup-container');
const okBtn = document.querySelector('.ok-btn');
const errorContainer = document.createElement('div');

errorContainer.classList.add('error-container');

form.addEventListener('submit', (event) => {
event.preventDefault();
let hasError = false;
const errorMessages = [];

if (fullNameInput.value === '') {
hasError = true;
errorMessages.push('Please enter your full name');
fullNameInput.classList.add('error');
} else {
fullNameInput.classList.remove('error');
}

if (emailInput.value === '' || !isValidEmail(emailInput.value)) {
hasError = true;
errorMessages.push('Please enter a valid email address');
emailInput.classList.add('error');
} else {
emailInput.classList.remove('error');
}

if (phoneInput.value === '') {
hasError = true;
errorMessages.push('Please enter a valid phone number');
phoneInput.classList.add('error');
} else {
phoneInput.classList.remove('error');
}

if (messageTextarea.value === '') {
hasError = true;
errorMessages.push('Please enter a message');
messageTextarea.classList.add('error');
} else {
messageTextarea.classList.remove('error');
}

errorContainer.innerHTML = '';

if (hasError) {
errorMessages.forEach((message) => {
const errorElement = document.createElement('p');
errorElement.classList.add('error-message');
errorElement.innerText = message;
errorContainer.appendChild(errorElement);
});
formContainer.insertBefore(errorContainer, form);
} else {
popup.classList.add('show');
}
});

okBtn.addEventListener('click', (event) => {
event.preventDefault();
popup.classList.remove('show');
});

function isValidEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
return emailRegex.test(email);
}