let h1  = document.querySelector('h1');
let options = document.querySelectorAll('.option');
let gameDiv = document.querySelector('.gameDiv');
let footer = document.querySelector('footer');
let h3 = document.querySelector('h3');
let cats = document.querySelectorAll('.cat');
let startBtn = document.querySelector('.info > button');
let infoDiv = document.querySelector('.info');

startBtn.addEventListener('click',displayGame);

for (var i = 0; i < cats.length; i++) {
	cats[i].addEventListener('mouseover',displayCategories);
}

function displayCategories() {
	var catNum = quiz.calcCat(this.innerHTML);
	h3.innerHTML = "Ukupno pitanja : "+catNum;
}

function displayGame() {
	infoDiv.style.display = "none";
	gameDiv.style.display = "block";

	startGame()
}

function startGame() {

	if (!quiz.isEnd()) {
		h1.innerHTML = quiz.getCurrentQuestion().text;

		let x = [0,1,2,3];

		for (var i = 0; i < options.length; i++) {
			let rand = Math.floor(Math.random()*x.length)
			options[i].innerHTML = quiz.getCurrentQuestion().options[x[rand]];
			options[i].onclick = userAnswer;
			x.splice(rand,1);
		}

		footer.innerHTML = 'Question '+(quiz.currentQuestionIndex + 1)+' / '+quiz.questions.length;
	}else{
			infoDiv.style.display = "block";

			h3.innerHTML = "GAME OVER !!! Total score is : "+quiz.score;

			gameDiv.style.display = "none"
	}
}

function userAnswer() {
	quiz.checkAnswer(this.innerHTML);
	startGame();
}