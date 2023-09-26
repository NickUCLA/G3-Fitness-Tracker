const regFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const goalWeight = document.querySelector('#goal-weight').value.trim(); // New line

  if (name && email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/user', {
      method: 'POST',
      body: JSON.stringify({ "name":name, "email":email, "password":password, "goalWeight": goalWeight }),
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in twice');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
document
  .querySelector('.signup-form')
  .addEventListener('submit', regFormHandler);
