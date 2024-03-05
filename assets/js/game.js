let catBreeds = [];

function shuffle(array) {
	let currentIndex = array.length;
	let randomIndex;

	while (currentIndex > 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}

fetch(`https://api.thecatapi.com/v1/breeds`)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		// console.log(data);
		for (let i = 0; i < data.length; i++) {
			catBreeds.push(data[i].name);
		}
		shuffle(catBreeds);
		// console.log(catBreeds);
	});
