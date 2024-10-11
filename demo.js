const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

// STEP 1: Uncomment the following code to allow JavaScript to find the elements that we want to make clickable.

const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      // STEP 2: Uncomment these lines to update the screen when server communication is successful.
      alert("You notified the server!");
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

// STEP 3: Uncomment this code to add a click event listener to the elements.

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

// STEP 4: Server call mock function (already implemented).

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
