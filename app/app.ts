///<reference path= "result.ts" />
///<reference path= "person.ts" />


function startGame() {
  // starting a new game

  const playerName : string | undefined = getInputValue('playername');
  logPlayer(playerName);

  postScore(100, playerName);
  postScore(-1, playerName);
  

  var messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  
}

function logPlayer(name: string = 'Player Unknown!') : void{
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string) : string | undefined {
  
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if (inputElement.value === '') {
    return undefined;
  }
  else {
    return inputElement.value;
  }
}

function postScore(score:number, playerName?: string): void {
  let logger : (value: string) => void;

  if (score < 0) {
    logger = logError;
  }
  else logger = logMessage;

  const scoreElement : HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;

logger(`The score is: ${score}`);

}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message :string) => console.log(message);
  logMessage(`Welcome to MultiMath!` );
 
function logError(err:string): void {
    console.error(err);
}

let myResult : Result = {
  playerName: "Marie", 
  score : 5, 
  factor: 7, 
  problemCount : 5
}

let person : Person = {
  name: "Ronald",
  age: undefined,
  formatName: () => "Daniel"
}

console.log(`Player's information: name: ${person.name}, age: ${person.age}, formatName: ${person.formatName}`);