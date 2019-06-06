function bowlingGame(bowls) {
    // Game starts at frame 1
    var frame = 1;
    // Using .reduce() function as a loop to go through the array
    return bowls.reduce((totalScore, currentBowl, indexOfGame, array) => {
      console.log('frame', frame)
      console.log('score', currentBowl)
      // Checking if 10 frames has been completed
      if(frame >= 10) {return totalScore + currentBowl};
      // Second roll (this starts from "frame 1.5" onwards)
      if(frame % 1 !== 0) {
        frame = Math.floor(++frame);
        // Checking if the player scored spare (1.5 and 1)
        if(currentBowl + array[indexOfGame-1] === 10) {
          // spare bonus points
          return totalScore + currentBowl + array[indexOfGame+1];
        }
        // if the player does not score spare
        return totalScore + currentBowl;
      }
      // Check if the roll was a strike
      if(currentBowl === 10) {
        // if it is strike, frame number increases (so only 1 roll in a frame)
        frame++;
        // Strike bonus points
        return totalScore + currentBowl + array[indexOfGame+1] + array[indexOfGame+2];
      }
      // Second roll in the frame
      frame += .5;

      // add the current score to the total
      return totalScore + currentBowl;
      },0);
  }

// export the function for unit tests
module.exports = bowlingGame;

