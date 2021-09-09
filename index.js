let userCard;
let robotArray = ["rock", "paper", "sci"];
let robotImageArray = [
  "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Limestone-060-RD010-C-SH_by22j3.jpg",
  "https://5.imimg.com/data5/HG/DI/MY-3889281/white-art-paper-500x500.jpg",
  "https://5.imimg.com/data5/CS/UQ/MY-3181807/fabric-cutting-scissor-500x500.jpg",
];
const root = document.getElementById("root");
const robotImage = document.getElementById("al");
let robotCard;

function idk() {
  var snd = new Audio("dee.wav"); // buffers automatically when created
  localStorage.setItem("dead", "yes");

  snd.play();

  setTimeout(() => {
    window.location.replace("death.html");
  }, 3000);
}

function isDead() {
  window.prompt("Waring", "Please Dont touch the sleeping robot");
  let value = localStorage.getItem("dead");

  if (value == "yes") {
    window.location.replace("death.html");
  }
}

function rock() {
  userCard = "rock";

  check();
}

function paper() {
  userCard = "paper";

  check();
}

function sci() {
  userCard = "sci";

  check();
}

function random(arrayy) {
  return Math.floor(Math.random() * arrayy.length);
}

function check() {
  let randomNum = random(robotArray);
  robotCard = robotArray[randomNum];
  robotImage.src = robotImageArray[randomNum];

  setTimeout(() => {
    robotImage.src =
      "https://thumbs.dreamstime.com/b/d-illustration-little-robot-sleeping-pillow-isolated-white-background-action-alien-character-cute-cyborg-future-gray-hand-148826686.jpg";

    root.textContent = "";
  }, 2500);

  if (userCard == robotCard) {
    root.textContent = "draw";
  } else if (userCard == "rock" || robotCard == "rock") {
    root.textContent = cardCheck("rock", "sci", "paper");
  } else if (userCard == "sci" || robotCard == "sci") {
    root.textContent = cardCheck("sci", "paper", "rock");
  } else if (userCard == "paper" || robotCard == "paper") {
    root.textContent = cardCheck("paper", "rock", "sci");
  }
}

function cardCheck(won, lose, last) {
  if (userCard == won && robotCard == lose) {
    return "user won";
  } else if (userCard == "paper" && robotCard == "rock") {
    return "user won";
  } else if (userCard == won && robotCard == lose) {
    return "robot won";
  } else if (userCard == won && robotCard == last) {
    return "robot won";
  } else {
    return "robot won";
  }
}
