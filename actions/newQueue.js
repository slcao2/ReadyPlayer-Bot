import { playerArr, playerArrString, gameNameArr, queueSize } from "../main.js";

export const newQueue = (args, message) => {
  if (args[1] && args[2] && args[2].match(/^\d+$/) && args[2] > 0) {
    message.channel.send(`A new queue has been added for ${args[1]} and you have been added to the queue`);
    playerArr.push(['<@' + message.author.id + '>']);
    playerArrString.push([message.author.username]);
    gameNameArr.push([args[1]]);
    queueSize.push([args[2]]);
  }
  else {
    message.channel.send(`Please state a game + proper queue size`);
  }

  if (args[2] == 1) {
    message.channel.send(`Get in here ${playerArr[playerArr.length - 1]} It's time to play ${gameNameArr[playerArr.length - 1]}!... by yourself... sad...`);
  }
}