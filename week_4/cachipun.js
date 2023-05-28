

    const myArr = ["Rock", "Paper", "Scissors"];
// Generate a random number between 0 and 2 for computer's selection
    let computer = Math.floor(Math.random() * 3); 
// Generate a random number between 0 and 2 for player's selection
    let player = Math.floor(Math.random() * 3);

// This line constructs the message that will say the player and computer choices
    let message = "Player " + myArr[player] + " vs Computer " 
    + myArr[computer] + ". ";
// Concatenate the tie message to the result message
    if (player === computer) {
      message = message + "It is a tie!"; 
 // Concatenate the player wins message to the result message     
    } else if ((player === 0 && computer === 2) || 
                (player === 1 && computer === 0) || 
                (player === 2 && computer === 1)) {
      message = message + "Player wins!"; 
      // Concatenate the computer wins message to the result message    
    } else {
      message = message + "Computer wins!"; 
    }
// Print the result message to the page
    document.write(message); 
// print the message to the console
    console.log(message);
