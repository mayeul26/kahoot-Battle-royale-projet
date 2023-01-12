var dict = {}; 
let Questions = [];
let Question = [];
let Reponse = [];
let numberOfQuestion = 4;
let numberOfPlayer = 4;
let correctAnswer = 0;
let i = 1;
let j = 1;
let k = 1;
let l = 0;
let m = 0;
let ReponsePlayer = [];
let Players = [];
let currentQuestionIndex = 0;

function getRandomInt() {
    return Math.floor(Math.random() * 4);
}




//Creation des questions

function getQuestion(){

for (i =1; i<numberOfQuestion; i++){ //on commence a 1 pour que les questions commencent à 1
    dict["Question" + i] = ""; //On crée un dictionnaire 
    Questions.push("Question " + i); //array dans lequel sont stockées les questions
    for (j=1;j<5;j++){
        dict["Question " + i] = dict["Question " + i] + "Reponse " + j + " "; //On associe 4 reponses a une question
        Reponse.push("Reponse " + j); 
        correctAnswer = dict["Question " + i]; 
        correctAnswer = 1;
    }
}

}

//Creation de la classe Player
class Player {
    constructor(name, points, ReponsePlayer) {
        this.name = name;
        this.points = points;
        this.ReponsePlayer = 0
    }
}

//Bouclage de la creation de joueurs
for(m= 0; m<numberOfPlayer; m++){
    Players.push("");
    Players[m] = new Player(m, 0, 0);
}

for(m= 0; m<numberOfPlayer; m++){ //Pour chaque joueur
    for (i = 0; i<numberOfQuestion-1;i++){ //Pour chaque question
        console.log(Questions[i])
        Players[m].ReponsePlayer = getRandomInt() //Le m-ème joueur repond un chiffre entre 1 et 4
        if (Players[m].ReponsePlayer == correctAnswer){
            console.log("correct answer : " + correctAnswer)
            console.log("reponse player : " + Players[m].ReponsePlayer);
            Players[m].points +=20;
            console.log(Players[m]);
        }
        else{
            console.log("correct answer : " + correctAnswer)
            console.log("reponse player : " + Players[m].ReponsePlayer);
            console.log(Players[m]);
            delete Players[m];
            break
        }
    }
    console.log(Players);
}

// ------- Code pour l'inscription des joueurs ------

function init() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.querySelector('#name').value;
      if (name) {
        document.cookie = `name=${name}`;
      }
    });
  }
//----------Code pour la sauvegarde des questions renseignées dans la page Config -----

let questions = [];

function saveQuestion() {
  // Récupération de la question saisie par l'utilisateur
  let question = document.getElementById("Question").value;

  // Ajout de la question au tableau de questions
  questions.push(question);

  // Réinitialisation des questions
  document.getElementById("BoiteQuestion").reset();
}

//----------Code pour la sauvegarde des réponses renseignées dans la page Config -----

let reponse = [];

function saveResponse() {
  // Récupération des réponses saisies par l'utilisateur
  let reponse = document.getElementById("Reponse").value;

  // Ajout de la question au tableau de questions
  reponse.push(reponse);

  // Réinitialisation des questions
  document.getElementById("BoiteReponses").reset();
}


  //  ------- Code pour l'affichage des questions sur l'interface joueur-----

  

  function displayNextQuestion() {
    // Vérification de la présence de questions
    if (questions.length == 0) {
      alert("Il n'y a aucune question à afficher.");
      return;
    }
  
    // Récupération de la question 
    let question = questions[currentQuestionIndex];
  
    // Affichage de la question renvoyée à la page Joueur
    let questionContainer = document.getElementByClass("ConteneurQuestion");
    questionContainer.innerHTML = `<p>Question ${currentQuestionIndex + 1} : ${question}</p>`;
  
    // Incrémentation de l'index de la question pour arriver à la suivante
    currentQuestionIndex++;
  }
  

  //  ------- Code pour l'affichage des réponses sur l'interface joueur-----

  function displayNextReponse() {
    // Vérification de la présence de réponses
    if (reponse.length == 0) {
      alert("Il n'y a aucune reponse à afficher.");
      return;
    }
  
    // Récupération de la reponse 
    let reponse = reponse[currentReponseIndex];
  
    // Affichage de la question renvoyée à la page Joueur
    let reponseContainer = document.getElementByClass("ConteneurReponse");
    reponseContainer.innerHTML = `<p>Checkbox $ Reponse ${currentReponseIndex + 1} : ${reponse}</p>`;
  
    // Incrémentation de l'index de la question pour arriver à la suivante
    currentReponseIndex++;
  }