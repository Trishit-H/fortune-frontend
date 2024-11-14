// Select the element where to dsiplay the fortune
const fortuneCard = document.getElementById('fortune');

// Button element that fetches a new fortune
const fortuneBtn = document.getElementById('btn-fortune');

// API base URL
const URL = 'https://fortune-backend-y215.onrender.com';

// Function to replace \n and \t espace sequences with
// <br> and &nbsp;
function replaceEscapeSequences(text) {
  const formattedText = text.replace(/\n/g, '<br>').replace(/\t/g, '&nbsp;&nbsp;');
  return formattedText;
}

// Function to fetch fortunes
async function getFortune() {
  // Send request
  const response = await fetch(`${URL}/api/v1/fortune`);

  // Get the JSON data
  const data = await response.json();

  // Extract the fortune text
  const fortune = data.data.message;

  // Replace escape sequences
  const formattedFortune = replaceEscapeSequences(fortune);

  // Replace the content in the card with the fortune
  fortuneCard.innerHTML = formattedFortune;
}

// Add event listener on the button to fetch fortune
// and set it to the card
fortuneBtn.addEventListener('click', getFortune);

// Ensure a fortune is fetched and displayed immediately when the page loads
document.addEventListener('DOMContentLoaded', getFortune);
