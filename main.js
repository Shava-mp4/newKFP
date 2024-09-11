// Kung Fu Panda Character Look Up

//global variables
let charName = document.getElementById("character-name");
let charImg = document.getElementById("main-img");
let charQuote = document.getElementById("quote");

// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    // Update page to Po
    charChange("Po", "po", "Buddy, I am the Dragon Warrior.");
  } else if (name === "tigress" || name === "master tigress") {
    // Update page to Tigress
    charChange("Master Tigress", "tigress", "That was pretty hardcore!");
  } else if (name === "mantis" || name === "master mantis") {
    // Update page to Mantis
    charChange("Master Mantis", "mantis", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    // Update page to Monkey
    charChange("Master Monkey", "monkey", "We should hang out.");
  } else if (name === "crane" || name === "master crane") {
    // Update page to Crane
    charChange(
      "Master Crane",
      "crane",
      "You can chain my body, but you will never chain my warrior spirit!"
    );
  } else if (name === "viper" || name === "master viper") {
    // Update page to Viper
    charChange("Master Viper", "viper", "I don't need to bite to fight!");
  } else if (name === "shifu" || name === "master shifu") {
    // Update page to Master Shifu
    charChange("Master Shifu", "shifu", "There is now a Level Zero.");
  } else if (name === "ping" || name === "mr. ping") {
    // Update page to Mr. Ping
    charChange(
      "Mr. Ping",
      "mr-ping",
      "We are noodle folk, broth runs through our veins!"
    );
  } else {
    // Update page to Question Mark
    charChange("?????", "question-mark", "Character Not Found");
  }
}

function charChange(fullName, short, quote) {
  charName.innerHTML = `${fullName}`;
  charImg.src = `img/${short}.png`;
  charQuote.innerHTML = `${quote}`;
}
