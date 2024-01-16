const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');
const signupLink = document.querySelector('.signup-link');
const loginLink = document.querySelector('.login-link');

signupLink.addEventListener('click', () => {
  loginContainer.style.display = 'none';
  signupContainer.style.display = 'block';
});

loginLink.addEventListener('click', () => {
  loginContainer.style.display = 'block';
  signupContainer.style.display = 'none';
});

const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signupButton = document.querySelector('#signup-button');

signupButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  // Aquí puedes agregar tu lógica para insertar los usuarios en la base de datos SQL
  // Por ejemplo, puedes utilizar una librería como "mysql" para conectarte a la base de datos y ejecutar consultas SQL
});
