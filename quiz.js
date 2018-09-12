function Quiz(questions) {
	this.questions = questions;
	this.score = 0;
	this.currentQuestionIndex = 0;

}
Quiz.prototype.calcCat = function(cat) {
	let category = cat.toLowerCase();
	if (category != "all") {
		let filter = this.questions.filter(function (e) {
			return e.category == category;
		})
		return filter.length;
	}else{
		return this.questions.length;	
	}
};
Quiz.prototype.isEnd = function() {
	return this.currentQuestionIndex === this.questions.length;
};

Quiz.prototype.getCurrentQuestion = function() {
	return this.questions[this.currentQuestionIndex];
};
Quiz.prototype.checkAnswer = function(answer) {
	if (this.getCurrentQuestion().answer  == answer) {
		this.score += this.getCurrentQuestion().points;
	}
		this.currentQuestionIndex++;
};


let quiz = new Quiz(questions);