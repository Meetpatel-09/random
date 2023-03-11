var d = new Date();
var time = d.getHours();

let greeting = document.getElementById("greetings");
let input = document.getElementById("inputName");
let btnAddName = document.getElementById("btnAddName");
let namesList = document.getElementById("namesList");
let btnpickRandom = document.getElementById("btnpickRandom");
let txtDisplayName = document.getElementById("txtDisplayName");

btnpickRandom.style.visibility = "hidden";

if (time < 12) {
     greeting.innerHTML = "Hello, Good morning!";
}
else if (time >= 12 && time <= 17) {
     greeting.innerHTML = "Hello, Good afternoon!";
}
else if (time >= 18 && time <= 21) {
     greeting.innerHTML = "Hello, Good Evening!";
}
else if (time >= 22) {
     greeting.innerHTML = "Hello, Good Night!";
}

let personNames = []

function addName() {
     let name = input.value;

     name == "" ? alert("Name cannot be empty.") : personNames.push(name);

     input.value = "";
     console.log(personNames);

     namesList.innerHTML = "";
     personNames.forEach((value, index, array) => namesList.innerHTML += `<li> ${value} </li>`);

     if (personNames.length >= 6) {
          input.disabled = true;
          btnAddName.disabled = true;
          btnpickRandom.style.visibility = "visible";

     }
}

function pickRandom() {
     let index = Math.floor(Math.random() * personNames.length);
     txtDisplayName.innerHTML = personNames[index] + ", it's your turn";

     personNames.splice(index, 1);

     namesList.innerHTML = "";
     personNames.forEach((value, index, array) => namesList.innerHTML += `<li> ${value} </li>`);

     console.log(personNames);
     input.disabled = false;
     btnAddName.disabled = false;
     if (personNames.length == 0) {
          btnpickRandom.disabled = true;
     }
}
