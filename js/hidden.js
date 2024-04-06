function currentAlphabetSet(e) {
   const currentKey = e.key;
   const setAlphabet = document.getElementById("alphabet");
   const displayKey = setAlphabet.innerText;
   const expectedKey = displayKey.toLowerCase();

   if (currentKey === expectedKey) {
      console.log("point is ok");
      continueGame();
      removeBackground(expectedKey);

    const updateScore =   score("current-score");

      const NewUpdateScore = updateScore + 1;
      
      displaySetScore("current-score", NewUpdateScore);

      // currentScoreElement.innerText = updateScore;
   } else {
     const down = score("life");
      const lifeDown = down - 1;

      displaySetScore("life", lifeDown);

      // lifeScoreElement.innerText = lifeDown;
   }
}

document.addEventListener("keyup", currentAlphabetSet);

function continueGame() {
   const alphabet = playGround();
   const setAlphabet = document.getElementById("alphabet");
   setAlphabet.innerText = alphabet;

   addBackground(alphabet);
}
// function setElement (){

// }

function play() {
   hiddenHomeScreen("home-page");
   displayPlayGround("play-ground");
   continueGame();
}

// document.getElementById("home-page-btn").addEventListener("click", function () {
//    const homePage = document.getElementById("home-page");
//    const playGround = document.getElementById("play-ground");
//    if (homePage) {
//       playGround.classList.remove("hidden");
//       homePage.classList.add("hidden");
//    } else  {
//       homePage.classList.add("hidden");
//       playGround.classList.remove("hidden");
//    }
// });
