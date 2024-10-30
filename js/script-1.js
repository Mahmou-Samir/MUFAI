document.querySelector(".login").addEventListener("click", function () {
  const users = [
    { username: "Ali", password: "123" },
    { username: "Omar", password: "123" },
    { username: "Aasem", password: "123" },
    { username:"Mahmoud", password:"123"}
  ];
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let userFound = false;
  for (let i = 0; i < users.length; i++) {     
    if (users[i].username === username && users[i].password === password) {
      alert(`Welcome ${username}`);
      userFound = true;
      break;
    } else if (
      users[i].username === username &&
      users[i].password !== password
    ) {
      alert(`Wrong password for user ${username}`);
      userFound = true;
      break;
    }
  }
  if (!userFound) {
    alert(`User ${username} not found`);
  }
});

