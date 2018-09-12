function Questions(text, options, answer, points, category) {
	this.text = text;
	this.options = options;
	this.answer = answer;
	this.points = points;
	this.category = category;
}



let questions = [
	new Questions("Glavni grad Srbije je ?", ["Zagreb", "Subotica", "Beograd", "Kikinda"], "Beograd", 5, "movie"),
	new Questions("Glavni grad Srbije2 je ?", ["Zagreb", "Subotica", "Beograd2", "Kikinda"], "Beograd2", 5, "movie"),
	new Questions("Glavni grad Srbije3 je ?", ["Zagreb", "Subotica", "Beograd3", "Kikinda"], "Beograd3", 5, "sport"),
	new Questions("Glavni grad Srbije4 je ?", ["Zagreb", "Subotica", "Beograd4", "Kikinda"], "Beograd4", 5, "programming"),
	new Questions("Glavni grad Srbije5 je ?", ["Zagreb", "Subotica", "Beograd5", "Kikinda"], "Beograd5", 5, "programming"),
	new Questions("Glavni grad Srbije6 je ?", ["Zagreb", "Subotica", "Beograd6", "Kikinda"], "Beograd6", 5, "sport"),
	new Questions("Glavni grad Srbije7 je ?", ["Zagreb", "Subotica", "Beograd7", "Kikinda"], "Beograd7", 5, "movie"),
	new Questions("Glavni grad Srbije8 je ?", ["Zagreb", "Subotica", "Beograd8", "Kikinda"], "Beograd8", 5, "movie")
]