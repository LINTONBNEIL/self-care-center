//buttons
var rmButton = document.querySelector(".receive-message");


//mantra image
var mantraImg = document.querySelector(".mantra-bell")

//text to print
var text = document.querySelector(".text")



// objet that stores arrays

var messages = {
  affirmations: affirmations,
  mantras: mantras,
};



//event listener
rmButton.addEventListener('click', findRandomMessage)
text.addEventListener('click', returnPage)

// functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function findRandomMessage() {
  var selected = document.querySelector('input[type="radio"]:checked')
  var randomIndex = getRandomIndex(messages[selected.value])
  text.innerHTML = messages[selected.value][randomIndex]
  reveal();
};



function reveal() {
  mantraImg.classList.add("hidden")
  text.classList.remove("hidden")
};

function returnPage() {
  mantraImg.classList.remove("hidden")
  text.classList.add("hidden")
}
