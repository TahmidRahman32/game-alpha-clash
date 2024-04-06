function hiddenHomeScreen(elementId) {
   const homePage = document.getElementById(elementId);
   homePage.classList.add("hidden");
}
function displayPlayGround(elementId) {
   const playGround = document.getElementById(elementId);
   playGround.classList.remove("hidden");
}

function addBackground (elementId){
   const bg = document.getElementById(elementId);
   bg.classList.add("bg-[#FFA500]");
} 
function removeBackground (elementId){
   const bg = document.getElementById(elementId);
   bg.classList.remove("bg-[#FFA500]");
} 

function playGround() {
   const Abc = "abcdefghijklmnopqrstuvwxyz";
   const arr = Abc.split("");

   const random = Math.round(Math.random() * 25);
   const alphabet = arr[random];

   return alphabet;
}

function score (elementId){
     const ScoreElement = document.getElementById(elementId);
     const ScoreText = ScoreElement.innerText;
     const lifeScore = parseInt(ScoreText);
     return lifeScore
}

function displaySetScore (elementId, value) {
   const element = document.getElementById(elementId);
   element.innerText = value;
}
