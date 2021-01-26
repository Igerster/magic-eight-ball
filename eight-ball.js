function userName() {
  let userName = prompt("What is your name?")
  if (userName != null){
    document.getElementById("name").innerHTML = "Hello, " +  userName
  }
}
function userQuestion() {
  let userQuestion = prompt("What is your question?")
  if (userQuestion != null){
    document.getElementById("question").innerHTML = "you asked " + userQuestion
  }
}
function answer(){
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";
  switch(randomNumber){
    case 0:
      eightBall = "It is certain";
      break;
     case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "Reply hazy try again";
      break;
    case 3:
      eightBall = "Cannot predict now";
      break;
    case 4:
      eightBall = "Do not count on it";
      break;
    case 5:
      eightBall = "My sources say no";
      break;
    case 6:
      eightBall = "Outlook not so good";
      break;
    case 7:
      eightBall = "Signs point to yes";
      break;
}
  let answer = document.getElementById("answer").innerHTML =  "The magic eight ball says... " + eightBall;
}
