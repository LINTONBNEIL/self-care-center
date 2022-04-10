//buttons
var rmButton = document.querySelector("#receiveMessage");
var clearBtn = document.querySelector("#clearButton");
//mantra image
var mantraImg = document.querySelector("#mantraBell");
//text to print
var text = document.querySelector("#textMessage")
var messageBox = document.querySelector("#messageBox");
//Loading Container
var loadingBox = document.querySelector("#loadingBox");
//Body to change background
var body = document.querySelector("#body");
// objet that stores arrays
var messages = {
  affirmations: affirmations,
  mantras: mantras,
};
//event listener
rmButton.addEventListener("click", fixingStuff);
clearBtn.addEventListener("click", returnPage);

// functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function findRandomMessage(selected) {
  var randomIndex = getRandomIndex(messages[selected.value])
  text.innerHTML = messages[selected.value][randomIndex]
  revealMessage();
};

function fixingStuff() {
  var selected = document.querySelector('input[type="radio"]:checked')
  if (!selected) {
    alert("Please Select Affirmation Or Mantra!")
  } else {
    findRandomMessage(selected)
    changeBackgroundColor(selected);
  }
};

function revealMessage() {
  mantraImg.classList.add("hidden")
  loadingBox.classList.remove("hidden")
  messageBox.classList.add("hidden")
  setTimeout(() => {
    loadingBox.classList.add("hidden")
    messageBox.classList.remove("hidden")
  }, 3000);
};

function returnPage() {
  var selected = document.querySelector('input[type="radio"]:checked')
  selected.checked = false
  mantraImg.classList.remove("hidden")
  messageBox.classList.add("hidden")
};

function changeBackgroundColor(selection) {
  selection.value === 'affirmations' ? showPacificDreamBg() : showSunsetBg()
};

function showPacificDreamBg() {
  body.classList.remove("body-blue-to-yellow-bg")
  body.classList.remove("body-sunset-bg")
  body.classList.add("body-pacific-dream-bg")
};

function showSunsetBg() {
  body.classList.remove("body-blue-to-yellow-bg")
  body.classList.remove("body-pink-to-white-bg")
  body.classList.add("body-sunset-bg")
};
