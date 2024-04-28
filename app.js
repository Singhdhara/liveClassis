// function programar() {
//   let titles = document.querySelector(".head-title");
//   let para = document.querySelector(".para");
//   titles.style.color = "red";
//   para.style.color = "gold";
// }

// function bgChange(){
//   let bgColorChange = document.querySelector("body");
//   bgColorChange.style.backgroundColor="#000";
// }

// function animation(){
//   let rotate = document.querySelector(".box");
//   rotate.style.animation=" rotate 1s infinite";
// }

// function size(classValeu, bgColor , fontColor) {
//   let button = document.getElementById(classValeu);
//   button.style.width = "100px";
//   button.style.backgroundColor = bgColor;
//   button.style.height = "90px";
//   button.style.color = fontColor;
//   button.style.borderWidth = "0";
// }
// function size(button, bgColor="red" , fontColor) {
//   button.style.width = "100px";
//   button.style.backgroundColor = bgColor;
//   button.style.height = "90px";
//   button.style.color = fontColor;
//   button.style.borderWidth = "0";
// }

// function colorChange(input) {
//   let body = document.body;
//   let color = input.value;
//   body.style.backgroundColor = color;
//   alert(color);
// }

// function login(event) {
//   event.preventDefault();
//   let Username = document.getElementById("Username");
//   let password = document.getElementById("password");
//   let UsernameView = document.getElementById("Username-view");
//   let passwordView = document.getElementById("password-view");
//   UsernameView.innerHTML = Username.value;
//   passwordView.innerHTML = password.value;
// }

// let product = [213, "item", 1994, "id", "title", "img"];
 
// console(product[0],product[1 ],product[2],product[3],product[4],product[5]);
 
// let teachers = [
//   "kapil",
//   "dheeraj",
//   "rahul",
//   "ravi",
//   "rohan",
//   "kanchi",
//   "bhaihari",
// ];
 
// let student = [
//     "kapil",
//     "dheeraj",
//     "rahul",
//     "ravi",
//     "rohan",
//     "kanchi",
//     "bhaihari",
//   ];
// let subjects = [
//     "Hindi",
//     "English",
//     "Math",
//     "Computer",
//   ];
 
// console.log(teachers, student, subjects);
// let student = {
//   name: "Ravi",
//   class: 5,
//   mediam: "English",
//   roll: 4,
//   section: "K",
// };
 
// console.log(student);


let mobile = {
  name: "Apple iPhone 15 (Blue, 128 GB)",
  price: 79900,
  rom: "128GB",
  display: "15.49 cm (6.1 inch) Super Retina XDR Display",
  camera: "48MP + 12MP | 12MP Front Camera",
  prosser: "A16 Bionic Chip, 6 Core Processor Processor",
  warrenty:
    "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
  image:
    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
  discount: 8,
};
 console.log(mobile);


// let amount = (mobile.price * mobile.discount) / 100;
// let discountPrice = mobile.price - amount;
 
// console.log(discountPrice);
// function sinup(event) {
//   event.preventDefault();
 
//   let user = {
//     firstname: event.target[0].value,
//     lastname: event.target[1].value,
//     mobile: event.target[2].value,
//     password: event.target[3].value,
//     email: event.target[4].value,
//   };
 
//   console.log(user);
// }