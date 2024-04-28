function input(num) {
  let resulte = document.getElementById("display");
  resulte.value += num;
}

function calc() {
  let resulte = document.getElementById("display");
  let output = eval(resulte.value);
  resulte.value = output;
}

function cancel() {
  let resulte = document.getElementById("display");
  resulte.value = "";
}
