document.addEventListener("DOMContentLoaded", function () {
    
const inputName = document.getElementById("name");
const inputLastname = document.getElementById("lastname");
const inputBirthdate = document.getElementById("birthdate");

const buttonsubmit = document.getElementById("buttonsubmit");

buttonsubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const name = inputName.value;
  const lastname = inputLastname.value;
  const birthdate = inputBirthdate.value;

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: "POST",
    body: JSON.stringify({
      name,
      lastname,
      birthdate,
    }), 
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Quedo registrado correctamente");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
});
  