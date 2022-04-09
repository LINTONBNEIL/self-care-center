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
rmButton.addEventListener("click", fixingStuff)
text.addEventListener("click", function() {
  returnPage();
  reloadPage();
})

// functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function findRandomMessage(selected) {
  // var selected = document.querySelector('input[type="radio"]:checked')
  var randomIndex = getRandomIndex(messages[selected.value])
  text.innerHTML = messages[selected.value][randomIndex]
  revealMessage();
};

// need conditional in findRandomMessage
//OR new function that is a conditional

function fixingStuff() {
  var selected = document.querySelector('input[type="radio"]:checked')
  if (selected) {
    findRandomMessage(selected)
  } else {
    alert("Please Select Affirmation Or Mantra!");
  }
}



function revealMessage() {
  mantraImg.classList.add("hidden")
  text.classList.remove("hidden")
};

function returnPage() {
  mantraImg.classList.remove("hidden")
  text.classList.add("hidden")
}

function reloadPage() {
  window.location.reload()
}
