const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.add("active")
})

loginBtn.addEventListener('click', () => {
  container.classList.remove("active")
})


//cheking and managing pseudo logins///as it is without proper backend
const users = [
  {   
      name: 'Gagan',
      email: 'Gagan@gmail',
      pass: '1234'
  },
  {
    name:'Raj',
      email: 'Raj@gmail',
      pass: 'pass1234'
  },
  {
    name:'Riya',
      email: 'Riya@gmail',
      pass: 'password'
  },
  {
    name:'Siri',
      email: 'Siri@gmail',
      pass: 'pass1234'
  },
  {
    name:'Shreya',
      email: 'Shreya@gmail',
      pass: 'password'
  },
]; //faked db containing fue usernames and passwords

function login() {
  event.preventDefault();

  var username = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPass').value;

  var isAuthenticated = users.find(user => user.email === username && user.pass === password);

  if (isAuthenticated) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      alert('Login successful!');
      window.location.href = '../Gagan/explorer.html';
      console.log('Redirecting to exlore.html')
  } else {
      alert('Login failed. Please check your credentials.');
  }
}
//UNIQUE USERNAME == EMAIL
function signUp(){
    var name = document.getElementById('signupName').value;
    var username = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPass').value;

    // Check if the username is already taken
    if (users.some(user => user.email === username)) {
        alert('Email already exists. Please choose a different one.');
        return;
    }

    // Add the user to the array
    users.push({ name: name,email: username, pass: password });
    alert('User registered successfully!');
}
