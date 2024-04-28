// function sinup(event) {
//   event.preventDefault();
//   let modal = document.querySelector(".modal");
//   let form = document.forms.register;

//   let user = {
//     firstname: form.elements.firstname.value,
//     lastname: form.elements.lastname.value,
//     email: form.elements.email.value,
//     password: form.elements.password.value,
//   };
//   console.table(user)
//   modal.style.display = "flex";
//   modal.classList.add("animate__animated", "animate__fadeIn");

//   // console.table(user);
// }

// Global Vairible //
var modal = document.getElementById("modal");
var modalBody = document.getElementById("modal-body");
let user = {};
function sinup(event) {
  event.preventDefault();
  modal.style.display = "flex";
  modalBody.className = "animate__animated animate__zoomIn";
  modal.className = "animate__animated animate__fadeIn";
  let form = document.forms.register;
  let firstname = form.elements.firstname;
  if (firstname.value == "Mr") {
    firstname.style.border = "2px solid green";
  } else {
    firstname.style.border = "2px solid red";
  }
  user.firstname = form.elements.firstname.value;
  user.lastname = form.elements.lastname.value;
  user.email = form.elements.email.value;
  user.password = form.elements.password.value;
  console.log(user);
}

function closeModal() {
  modalBody.className = "animate__animated animate__zoomOut";
  modal.className = "animate__animated animate__fadeOut";
}

function sinin(event) {
  event.preventDefault();
  let form = document.forms.login;
  user.email = form.elements.email.value;
  user.password = form.elements.password.value;
  console.log(user);
}

function demo() {
  if (5 == 5) {
    alert("succese!");
  } else {
    alert("failed");
  }
}
